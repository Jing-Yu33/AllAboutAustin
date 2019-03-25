package database.datacollection;

import java.io.IOException;
import java.util.HashMap;
import org.json.simple.*;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.client.Invocation.Builder;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status.Family;

import com.socrata.api.*;
import com.socrata.model.soql.SoqlQuery;

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
			//TODO: get lat / lon from MongoDB sensor data
			// int zipcode = getZipCode( double lat, double lon);
			int zipcode = getZipCode(jo.get("int_id"));
			
			HashMap<String, Double> data = new HashMap<String, Double>();
			for (Object key : jo.keySet()) {
				data.put((String)key, getRankedValue(key, jo.get(key)));
			}
			ds.addZipcodeData(zipcode, data);
		}
		
		return ds;
	}
	
	/**
	 * Placeholder for zipcode function. Change to use Google Maps class.
	 * @param field
	 * @return
	 */
	private Integer getZipCode(Object field) {
		return 0;
	}

	/**
	 * Return a 0.0-10.0 float value ranking for a given key's value in the original JSON data
	 * @param set
	 * @param key
	 * @return
	 */
	private double getRankedValue(Object key, Object value) {
		//TODO: Make an actual ranking, dependent on which key this is
		try {
			return Double.parseDouble((String) value);
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
