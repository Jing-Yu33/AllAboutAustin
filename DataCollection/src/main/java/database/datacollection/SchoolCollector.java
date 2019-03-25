package database.datacollection;

import java.io.IOException;
import java.util.HashMap;

import javax.ws.rs.core.Response;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.socrata.api.HttpLowLevel;
import com.socrata.api.Soda2Consumer;
import com.socrata.model.soql.SoqlQuery;

/**
 * Collects education data: high school graduation rates.
 *
 * If I make a change here can I commit
 * 			Yes!
 */

public class SchoolCollector implements Collector {

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
			response = consumer.query("xeb7-q8v3", HttpLowLevel.JSON_TYPE, SoqlQuery.SELECT_ALL);
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
			int zipcode = getZipCode(jo.get("school").toString());
			HashMap<String, Double> data = new HashMap<String, Double>();
			for (Object key : jo.keySet()) {
				if (((String) key).contains("2016")) {
					data.put((String)key, getRankedValue(key, jo.get(key)));
				}
			}
			ds.addZipcodeData(zipcode, data);
		}
		
		return ds;
	}
	
	/**
	 * Convert a field into a zipcode
	 * @param field
	 * @return
	 */
	private Integer getZipCode(Object field) {
		String name = field.toString();
		name = name.replaceAll(" HS", " High School");
		return GoogleZipFinder.getZipCode(name);
	}

	/**
	 * Return a 0.0-10.0 float value ranking for a given key's value in the original JSON data
	 * //@param set
	 * //@param key
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
}
