package database.datacollection.models;
import java.util.HashMap;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;

@Indexes(
	    @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class GenericRawData {
	@Id
	protected ObjectId id;
	protected String zipcode;
	protected HashMap<String, Double> points;
	
	// Required	
	public GenericRawData() {};
	
	public GenericRawData(String zipcode, HashMap<String, Double> points) {
		this.zipcode = zipcode;
		this.points = points;		
	}


	public String getZipcode() {
		return zipcode;
	}

	public HashMap<String, Double> getPoints(){
		return points;
	}
}

