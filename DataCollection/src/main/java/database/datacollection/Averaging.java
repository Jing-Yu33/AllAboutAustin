package database.datacollection;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

import database.datacollection.models.*;

public class Averaging {
    public static double getFoodAverage(String zip){
        FoodRawData foodFullData = MongoStorage.getFoodRawData(zip);
        if (foodFullData == null)
            return 0;
        HashMap<String, Double> foodData = foodFullData.getPoints();
        return runKeys(foodData);
    }

    public static double getTrafficAverage(String zip) {
        TrafficRawData trafficFullData = MongoStorage.getTrafficRawData(zip);
        if (trafficFullData == null)
            return 0;
        HashMap<String, Double> trafficData = trafficFullData.getPoints();
        return runKeys(trafficData);
    }

    public static double getSchoolAverage(String zip) {
        SchoolRawData schoolFullData = MongoStorage.getSchoolRawData(zip);
        if (schoolFullData == null)
            return 0;
        HashMap<String, Double> trafficData = schoolFullData.getPoints();
        return runKeys(trafficData);
    }
    
   /* Work in progress, this is going to the function that looks for nearby zipcodes within a certain radius
    * Given a zipcode, it should return the zipcodes in the surrounding radius. The plan is to store this inside the database
    * 
	public static ArrayList<String> getsurroundingZipcodes() throws IOException{
		ArrayList<String> zipcodes = new ArrayList<String>();
		Client client = ClientBuilder.newClient();
		
		//Need a new key, and will need to put the string together from input
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
		
		//Need to edit this depnding on how the JSON is structured
		for (Object o : (JSONArray) jsonPayload.get("zip_codes")) {
			String zipcode = (String) o;
			zipcodes.add(zipcode);
		}
		return zipcodes;
	}
    
    */
    
    
    
    /**
     * Given a points set, run through all of them and return the double average of all the doubles therein.
     * @param dataset
     * @return
     */
    private static double runKeys(HashMap<String, Double> dataset) {
        double runningSum = 0;
        double count = 0;
        for(String item : dataset.keySet())
        {
             count++;
             runningSum += dataset.get(item);
        }
        if(count > 0)
            return runningSum/count;
        else return 0.0;
    }
}
