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
	//Key is slightly obscured for Git security reasons
	public static String part1="AIzaSyA1Kk6GzjZDS0Fhoj";
	public static String part2="Vc0LJqTc4YcwSBE8w";
	private static final String GOOGLE_MAPS_KEY = part1+part2;

	private static final String BAD_RESULT = "0"; // Zipcode to return for failed query
	private enum QueryType {ZIPCODE, COORDINATES};
	
	public static int getZipCode(String search) {
		Client client = ClientBuilder.newClient();
		WebTarget resource = client.target("https://maps.googleapis.com/maps/api/geocode/json");
		resource = resource.queryParam("address", search);
		resource = resource.queryParam("bounds", "30.112439,-98.100491|30.518747,-97.366567");
		resource = resource.queryParam("key", GOOGLE_MAPS_KEY);

		return Integer.parseInt(doQuery(resource, QueryType.ZIPCODE)); //doQuery is written to protect against NumberFormatException.
	}
	
	public static int getZipCode(double lat, double lon) {
		Client client = ClientBuilder.newClient();
		WebTarget resource = client.target("https://maps.googleapis.com/maps/api/geocode/json");
		resource = resource.queryParam("latlng", Double.toString(lat) + "," + Double.toString(lon));
		resource = resource.queryParam("key", GOOGLE_MAPS_KEY);

		return Integer.parseInt(doQuery(resource, QueryType.ZIPCODE));
	}
	
	public static Double[] getCoordinates(String zipcode) {
		Client client = ClientBuilder.newClient();
		WebTarget resource = client.target("https://maps.googleapis.com/maps/api/geocode/json");
		resource = resource.queryParam("address", zipcode);
		//resource = resource.queryParam("bounds", "30.112439,-98.100491|30.518747,-97.366567");
		resource = resource.queryParam("key", GOOGLE_MAPS_KEY);
		
		Double[] coords = new Double[2];
		String rval = doQuery(resource, QueryType.COORDINATES);
		if (rval.equals(BAD_RESULT)) {
			coords[0] = 0.0;
			coords[1] = 0.0;
		} else {
			coords[0] = Double.parseDouble(rval.substring(0, rval.indexOf(",")));
			coords[1] = Double.parseDouble(rval.substring(rval.indexOf(",") + 1, rval.length()));
		}
		return coords;
	}
	
	private static String doQuery(WebTarget resource, QueryType type) {
		Builder request = resource.request();
		request.accept(MediaType.APPLICATION_JSON);

		Response response = request.get();

		if (response.getStatusInfo().getFamily() != Family.SUCCESSFUL) {
			return BAD_RESULT;
		}

		String payload = response.readEntity(String.class);
		JSONObject jsonPayload;
		try {
			jsonPayload = (JSONObject) (new JSONParser()).parse(payload);
		} catch (ParseException e) {
			return BAD_RESULT;
		}
		
		if (!jsonPayload.get("status").toString().equals("OK")) {
			System.out.println("Google query return status: " + jsonPayload.get("status").toString());
			return BAD_RESULT;
		}

		try {
			JSONArray results = (JSONArray) jsonPayload.get("results");
			JSONObject result = (JSONObject) results.get(0);
			if (type.equals(QueryType.ZIPCODE)) {
				JSONArray addrComponents = (JSONArray) result.get("address_components");
				for (Object o : addrComponents) {
					JSONObject jo = (JSONObject) o;
					if (((JSONArray) jo.get("types")).get(0).equals("postal_code")) {
						return parseZip(jo.get("short_name"));
					}
				}	
			} else {
				JSONObject geoComponents = (JSONObject) result.get("geometry");
				JSONObject coordinates = (JSONObject) geoComponents.get("location");
				return coordinates.get("lat") + "," + coordinates.get("lng");
			}
		} catch (Exception e) {
			return BAD_RESULT;
		}
		
		return BAD_RESULT;
	}

	private static String parseZip(Object arg) {
		try {
			return Integer.toString(Integer.parseInt(arg.toString())); // Test if Integer can parse an int
		} catch (Exception e) {
			return BAD_RESULT;
		}
	}
}
