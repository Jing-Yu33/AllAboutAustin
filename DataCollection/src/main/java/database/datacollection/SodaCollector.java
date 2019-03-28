package database.datacollection;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import org.json.simple.*;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import javax.ws.rs.core.Response;
import com.socrata.api.*;
import com.socrata.model.soql.SoqlQuery;

import database.datacollection.models.TrafficSensorData;

/**
 * Collects SODA data, used for Austin Government sources.
 *
 */

public class SodaCollector implements Collector {
	
	public DataSet getNewData() throws IOException {

		Soda2Consumer consumer = Soda2Consumer.newConsumer("https://data.austintexas.gov/");
				//From javadoc:
			    /**
			     * Creates a new Soda2Consumer with the passed in credentials associated with it.  All requests
			     * will contain these credentials.
			     *
			     * @param url the base URL for the SODA2 domain to access.
			     * @param userName user name to log in as
			     * @param password password to log in with
			     * @param token the App Token to use for authorization and usage tracking.  If this is {@code null}, no value will be sent.
			     *
			     * @return the new Soda2Consumer that has been fully configured.
			     */

		// To get a raw String of the results
		Response response;
		try {
			response = consumer.query("vw6m-5i7b", HttpLowLevel.JSON_TYPE, SoqlQuery.SELECT_ALL);
		} catch (Exception e) {
			throw new IOException(e.toString());
		}

		String payload = response.readEntity(String.class);
		JSONArray jsonPayload;
		try {
			jsonPayload = (JSONArray) (new JSONParser()).parse(payload);
		} catch (ParseException e) {
			throw new IOException(e.toString());
		}
		
		DataSet ds = new DataSet();
		
		for (Object o : jsonPayload.toArray()) {
			JSONObject jo = ((JSONObject) o);
			Object kits_id = jo.get("int_id");
			if (kits_id == null)
				continue;
			int zipcode = getZipCode(kits_id.toString());

			HashMap<String, Double> data = new HashMap<String, Double>();
			String name = jo.get("intname").toString();
			Double value = getRankedValue("speed", jo.get("speed"));
			data.put(name, value);

			ds.addZipcodeData(zipcode, data);
		}
		
		return ds;
	}
	
	/**
	 * Given KITS ID, look up MongoDB lat / lon coordinates, and use Google Maps class to convert that to zip code
	 * @param id	KITS ID from the traffic sensor database
	 * @return
	 */
	private Integer getZipCode(String id) {
		TrafficSensorData match = MongoStorage.getSensorData(id);
		if (match == null) {
			System.out.println("No match for ID " + id);
			return 0;
		}
		System.out.println("ID " + id + " is at " + match.getLat() + ", " + match.getLon());
		return GoogleZipFinder.getZipCode(match.getLat(), match.getLon());
	}

	/**
	 * Return a 0.0-10.0 float value ranking for a given key's value in the original JSON data
	 * @param set
	 * @param key
	 * @return
	 */
	private double getRankedValue(Object key, Object value) {
		try {
			return 10 - Double.parseDouble((String) value);
		} catch (Exception e) {
			return 5.0;
		}
	}
	
	public DataSet getSensorInfoData() throws IOException {

		Soda2Consumer consumer = Soda2Consumer.newConsumer("https://data.austintexas.gov/");

		// To get a raw String of the results
		Response response;
		try {
			response = consumer.query("wakh-bdjq", HttpLowLevel.JSON_TYPE, SoqlQuery.SELECT_ALL);
		} catch (Exception e) {
			throw new IOException(e.toString());
		}

		String payload = response.readEntity(String.class);
		JSONArray jsonPayload;
		try {
			jsonPayload = (JSONArray) (new JSONParser()).parse(payload);
		} catch (ParseException e) {
			throw new IOException(e.toString());
		}
		
		DataSet ds = new DataSet();
		
		for (Object o : jsonPayload.toArray()) {
			JSONObject jo = ((JSONObject) o);
			
			if (jo.get("kits_id") == null)
				continue;
			int zipcode = Integer.parseInt(jo.get("kits_id").toString()); // Use KITS id as primary key
			
			HashMap<String, Double> data = new HashMap<String, Double>();
			for (Object key : jo.keySet()) {
				if (key.equals("location_latitude") || key.equals("location_longitude"))
						data.put((String)key, getRankedValue(key, jo.get(key)));
			}
			ds.addZipcodeData(zipcode, data);
		}
		
		return ds;
	}
}
