package database.datacollection;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;


@Entity("zipcodes")
@Indexes(
	    @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class Zipcode {
	@Id
	private ObjectId id;
	private String zipcode;
	private Double FoodIndex;
	private Double EducationIndex;
	private Double TrafficIndex;
	
	// Required	
	private Zipcode() {};
	
	public Zipcode(String zipcode, Double FoodIndex, Double EducationIndex, Double TrafficIndex) {
		this.zipcode = zipcode;
		this.FoodIndex = FoodIndex;
		this.EducationIndex = EducationIndex;
		this.TrafficIndex = TrafficIndex;
		
	}
	
	public String toString() {
		return "ZipCode: "+zipcode+" FoodIndex: "+FoodIndex+" EducationIndex: "+EducationIndex+" TrafficIndex: "+TrafficIndex;
	}
}

