package database.datacollection.models;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

import org.json.simple.*;

public class HeatmapBoundary {
	private static HashMap<String, HeatmapBoundary> combined = new HashMap<String, HeatmapBoundary>();
	
	private String zipcode;
	private List<Float> lat;
	private List<Float> lon;
	
	public HeatmapBoundary(String zipcode) {
		this.zipcode = zipcode;
		lat = new ArrayList<Float>();
		lon = new ArrayList<Float>();
	}
	
	public void addCoordArray(JSONArray arr) {
		for (Object o : arr) {
			JSONArray pair = (JSONArray) o;
			addCoord(Float.parseFloat(pair.get(0).toString()),
						Float.parseFloat(pair.get(1).toString()));
		}
	}
	
	public void addCoord(Float latc, Float lonc) {
		lat.add(latc);
		lon.add(lonc);
	}
	
	public String dumpCoordinates() {
		if (lat.size() != lon.size())
			throw new IllegalStateException("Lat / lon size mismatch");

		String ret = "[";
		
		for (int i = 0; i < lat.size(); i++) {
			ret += "[" + lat.get(i) + "," + lon.get(i) + "]";
			if (i < lat.size() - 1)
				ret += ",";
		}
		
		return ret + "]";
	}
	
	public static HeatmapBoundary getHeatmapBoundary(String zip) {
		if (combined.containsKey(zip)) {
			return combined.get(zip);
		} else {
			return null;
		}
	}
	
	/**
	 * Preserve a HeatmapBoundary instance in the static list
	 * @param hb
	 */
	public static void storeHeatmapBoundary(HeatmapBoundary hb) {
		HeatmapBoundary.combined.put(hb.getZipcode(), hb);
	}
	
	public String getZipcode() {
		return this.zipcode;
	}
	
	@Override
	public String toString() {
		return "HeatmapBoundary " + zipcode + " " + dumpCoordinates();
	}
}
