package database.datacollection;

import java.io.IOException;
import java.util.HashMap;
import javax.ws.rs.client.*;
import javax.ws.rs.client.Invocation.Builder;
import javax.ws.rs.core.*;
import javax.ws.rs.core.Response.Status.Family;
import org.json.simple.*;
import org.json.simple.parser.*;

/**
 * Collects Zomato data
 */

public class ZomatoCollector implements Collector {
	
	private static final String ZOMATO_KEY = "94d75c51c21ca2fce1a0413c617f9394";

	public DataSet getNewData() throws IOException {
		DataSet ds = new DataSet();
		Client client = ClientBuilder.newClient();

		WebTarget resource = client.target("https://developers.zomato.com/api/v2.1/search");
		resource = resource.queryParam("entity_id", "278"); // 278 is Austin
		resource = resource.queryParam("entity_type", "city");

		Builder request = resource.request();
		request.header("user-key", ZOMATO_KEY);
		request.accept(MediaType.APPLICATION_JSON);

		Response response = request.get();
		
		if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
			throw new IOException(new Integer (response.getStatus()).toString());
		}

		String payload = response.readEntity(String.class);
		JSONObject jsonPayload;
		try {
			jsonPayload = (JSONObject) (new JSONParser()).parse(payload);
		} catch (ParseException e) {
			throw new IOException(e.toString());
		}
		
		for (Object o : (JSONArray) jsonPayload.get("restaurants")) {
			JSONObject restaurant = (JSONObject) o;
			int zipcode = Integer.parseInt(JSONfind(restaurant, new String [] {"restaurant", "location", "zipcode"}).toString());
			
			HashMap<String, Double> data = new HashMap<String, Double>();
			data.put("aggregate_rating", makeRankedValue(restaurant)); // Only one data point
			
			ds.addZipcodeData(zipcode, data);
		}
		
		return ds;
	}

	/**
	 * Returns the food score, based on Zomato aggregate rating, for a zip code.
	 * @param restaurant
	 * @return
	 */
	private double makeRankedValue(JSONObject restaurant) {
		// TODO: Accomodate multiple restaurants in the same zip code. This overwrites each with the newest.
		// * 2 to adjust for 5 star ratings
		return 2 * Double.parseDouble(JSONfind(restaurant, new String[] {"restaurant", "user_rating", "aggregate_rating"}).toString());
	}
	
	private Object JSONfind(JSONObject arg, String[] keys) {
		for (int i = 0; i < keys.length - 1; i++) {
			arg = (JSONObject) arg.get(keys[i]);
		}
		return arg.get(keys[keys.length - 1]);
	}
}
