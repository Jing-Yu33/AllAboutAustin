package database.datacollection.models;
import java.util.HashMap;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;

@Entity("Food_Raw_Data")

public class FoodRawData extends GenericRawData {
	
	public FoodRawData(String str, HashMap<String, Double> props) {
		super(str, props);
	}
}
