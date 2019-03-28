package database.datacollection.models;
import java.util.HashMap;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;

@Entity("School_Raw_Data")

public class SchoolRawData extends GenericRawData {

	public SchoolRawData(String str, HashMap<String, Double> props) {
		super(str, props);
	}
}

