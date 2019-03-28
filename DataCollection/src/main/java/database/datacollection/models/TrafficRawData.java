package database.datacollection.models;
import java.util.HashMap;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;

@Entity("Traffic_Raw_Data")

public class TrafficRawData extends GenericRawData {
	
	public TrafficRawData() {
		super();
	}
	
	public TrafficRawData(String str, HashMap<String, Double> props) {
		super(str, props);
	}
}
