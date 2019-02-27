package datacollection;
import java.util.HashMap;

/**
 * Generic class to represent data retrieved from a source.
 * This DataSet class can be stored into the MongoDB database using MongoStorage class.
 */

public class DataSet {
	HashMap <Integer, HashMap<String, String>> zipData; //zipData maps zip codes (Integer) to key-value sets (HashMap<String, String>). Each key-value set is the actual data.

	public DataSet() {
		//zipData = 
	}

	public void addZipcodeData(Integer zipCode, HashMap<String, String> data) {
		
	}
	
	public void deleteZipcodeData(Integer zipCode) {
		
	}
}
