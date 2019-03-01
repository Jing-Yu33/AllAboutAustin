package database.datacollection;
import java.util.HashMap;

/**
 * Generic class to represent data retrieved from a source.
 * This DataSet class can be stored into the MongoDB database using MongoStorage class.
 */

public class DataSet {
	public HashMap <Integer, HashMap<String, Double>> zipData; //zipData maps zip codes (Integer) to key-value sets (HashMap<String, Float>). Each key-value set is the actual data.

	public DataSet() {
		zipData = new HashMap<Integer, HashMap<String, Double>>();
	}

	public void addZipcodeData(Integer zipCode, HashMap<String, Double> data) {
		zipData.put(zipCode, data);
	}
	
	public void deleteZipcodeData(Integer zipCode) {
		zipData.remove(zipCode);
	}
		
	public void printDataSet() {
		for (Integer n : zipData.keySet()) {
			System.out.println(n.toString() + ": " + zipData.get(n).toString());
		}
	}
}
