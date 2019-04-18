package database.datacollection;

import java.io.*;

import org.json.simple.*;
import org.json.simple.parser.*;

import database.datacollection.models.HeatmapBoundary;
import database.datacollection.models.Zipcode;

/**
 * Reads input and output files to create the heatmap boundary files
 * @author self
 *
 */

public class HeatmapBoundaryAssembler {

	private static final String INPUT_PATH = "Zipcodes.geojson";
	private static final String OUTPUT_PATH = "HeatmapGeojsonReal.geojson";
	
	static BufferedWriter writer;
	static boolean enabled = false; //Disable the output unless output file was available
	static boolean firstEntry = true;
	
	public static void setup() {
		enabled = true;
		initHeatmapBoundaryCoords();
		if (!enabled) // Setup had an IO error
			return;
		
		try {
			writer = new BufferedWriter(new FileWriter(OUTPUT_PATH));
		    writer.write("{\"type\": \"FeatureCollection\",\"features\": [");
		} catch (IOException e) {
			System.out.println("HeatmapBoundraryAssembler: Could not open output file " + e.getMessage());
			enabled = false;
		}
	}
	
	public static void teardown() {
	    try {
	    	writer.write("]}");
			writer.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Produce an entry in the output file for a given zipcode
	 * @param zipcode
	 */
	public static void makeHeatmapOutput(Zipcode zipcode) {
		if (!enabled) return;
		
		try {
			if (!firstEntry) {
				writer.write(",");
				firstEntry = false;
			}
			writer.write("{\"type\":\"Feature\",\"properties\":{\"zipcode\":\"" + zipcode.zipcode + "\",\"name\":\"name\",\"foodScore\":" + zipcode.FoodScore  + ", \"educationScore\":" + zipcode.EducationScore + ",\"trafficScore\":" + zipcode.TrafficScore + ",\"number_of_records\":null,\"objectid\":\"68\",\"zipcodes_id\":\"79\"},\"geometry\":{\"type\":\"MultiPolygon\",\"coordinates\":[[");
			writer.write(HeatmapBoundary.getHeatmapBoundary(zipcode.zipcode).dumpCoordinates());
			writer.write("]]}}");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * Invoke HeatmapBoundary functions to build the data set
	 */
	private static void initHeatmapBoundaryCoords() {
		JSONParser pp = new JSONParser();
		
		try {
			Object o = pp.parse(new FileReader(INPUT_PATH));
			JSONObject alldata = (JSONObject) o;
			JSONArray entries = (JSONArray) alldata.get("features");
			for (Object entry : entries) {
				JSONObject jo = (JSONObject) entry;
				String zipcode = ((JSONObject) jo.get("properties")).get("zipcode").toString();
				HeatmapBoundary hb = new HeatmapBoundary(zipcode);
				JSONArray outer = (JSONArray) ((JSONObject) jo.get("geometry")).get("coordinates");
				JSONArray inner = (JSONArray) outer.get(0);
				JSONArray coords = (JSONArray) inner.get(0);
				hb.addCoordArray(coords);
				HeatmapBoundary.storeHeatmapBoundary(hb);
			}
		} catch (Exception e) {
			System.out.println("HeatmapBoundraryAssembler: Could not open input file " + e.getMessage());
			enabled = false;
		}
	}
}
