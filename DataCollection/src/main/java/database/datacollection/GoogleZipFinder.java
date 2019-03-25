package database.datacollection;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.client.Invocation.Builder;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status.Family;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class GoogleZipFinder {
	//Both keys are slightly obscured for Git security reasons
	//private static final String GOOGLE_MAPS_KEY = "SyBhecwiFsviDar_WNPG9VgTWioeFC8zusk"; // Original // Prepend with AIza
	private static final String GOOGLE_MAPS_KEY = "SyD82V-J6GtAhdAligfJk8G9XAPO0E0WICI"; // Project-created // Prepend with AIza
	
	public static String getZipCode(String search) {
		Client client = ClientBuilder.newClient();
		WebTarget resource = client.target("https://maps.googleapis.com/maps/api/geocode/json");
		resource = resource.queryParam("address", search);
		resource = resource.queryParam("key", GOOGLE_MAPS_KEY);

		return doQuery(resource);
	}
	
	public static String getZipCode(double lat, double lon) {
		Client client = ClientBuilder.newClient();
		WebTarget resource = client.target("https://maps.googleapis.com/maps/api/geocode/json");
		resource = resource.queryParam("latlng", Double.toString(lat) + "," + Double.toString(lon));
		resource = resource.queryParam("key", GOOGLE_MAPS_KEY);

		return doQuery(resource);
	}
	
	private static String doQuery(WebTarget resource) {
		Builder request = resource.request();
		request.accept(MediaType.APPLICATION_JSON);

		Response response = request.get();

		if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
			return "N/A";
		}

		String payload = response.readEntity(String.class);
		JSONObject jsonPayload;
		try {
			jsonPayload = (JSONObject) (new JSONParser()).parse(payload);
		} catch (ParseException e) {
			return "N/A";
		}
		
		if (!jsonPayload.get("status").toString().equals("OK")) {
			System.out.println("Google query return status: " + jsonPayload.get("status").toString());
			return "N/A";
		}

		try {
			JSONArray results = (JSONArray) jsonPayload.get("results");
			JSONObject result = (JSONObject) results.get(0);
			JSONArray addrComponents = (JSONArray) result.get("address_components");
			for (Object o : addrComponents) {
				JSONObject jo = (JSONObject) o;
				if (((JSONArray) jo.get("types")).get(0).equals("postal_code")) {
					return jo.get("short_name").toString();
				}
			}
		} catch (Exception e) {
			return "N/A";
		}
		
		return "N/A";
	}

}
