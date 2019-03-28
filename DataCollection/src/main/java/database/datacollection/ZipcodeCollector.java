package database.datacollection;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;

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

public class ZipcodeCollector {
	
	public static ArrayList<String> getZipcodes() throws IOException{
		ArrayList<String> zipcodes = new ArrayList<String>();
		Client client = ClientBuilder.newClient();

		WebTarget resource = client.target("https://www.zipcodeapi.com/rest/UR8RH5qWgfSbCp5Q2PLXaEFhwf8CGZFPcKePSjoVlrst1BydtKymbW2HiYCo5ZiW/city-zips.json/Austin/TX");

		Builder request = resource.request();
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
		
		for (Object o : (JSONArray) jsonPayload.get("zip_codes")) {
			String zipcode = (String) o;
			zipcodes.add(zipcode);
		}
		return zipcodes;
	}
	
}
