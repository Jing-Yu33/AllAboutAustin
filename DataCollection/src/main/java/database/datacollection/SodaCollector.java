package database.datacollection;

import java.io.IOException;
import java.util.HashMap;
import org.json.simple.*;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import javax.ws.rs.core.Response;
import com.socrata.api.*;
import com.socrata.builders.SoqlQueryBuilder;
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
			SoqlQuery sq = SoqlQuery.SELECT_ALL;
			SoqlQueryBuilder sqb = new SoqlQueryBuilder(sq);
			sqb.setLimit(500);
			sqb.setOffset(0);
			response = consumer.query("cqdh-farx", HttpLowLevel.JSON_TYPE, sqb.build());
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
			String name;
			try {
				name = jo.get("_24_hour_volume_count_locations").toString();
				name = name.substring(0, name.indexOf(","));
				if (name == null)
					continue;
				name = name.replace('.', '_');
				
				String date = jo.get("date").toString();
				date = date.substring(0, 4);
				if (Integer.parseInt(date) < 2010)
					continue;
			} catch (Exception e) {
				System.out.println("SodaCollector JSON processing error: " + e.toString());
				continue;
			}
				
			int zipcode = GoogleZipFinder.getZipCode(name);

			HashMap<String, Double> data = new HashMap<String, Double>();
			Double value = getRankedValue("total_volume", jo.get("total_volume"));
			data.put(name, value);

			ds.addZipcodeData(zipcode, data);
		}
		
		return ds;
	}

	/**
	 * Return a 0.0-10.0 float value ranking for a given key's value in the original JSON data
	 * @param set
	 * @param key
	 * @return
	 */
	private double getRankedValue(Object key, Object value) {
		return Math.max(0.0, 10 - 0.5 * Math.log(Double.parseDouble(value.toString())));
		/*
		try {
			return Math.max(0, 10 - 3.5 * Math.log(Double.parseDouble(value.toString())));
		} catch (Exception e) {
			return 5.0;
		}*/
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
