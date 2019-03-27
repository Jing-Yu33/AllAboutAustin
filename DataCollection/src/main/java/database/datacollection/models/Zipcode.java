package database.datacollection.models;
import java.util.ArrayList;

import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;


@Entity("zipcodes")
@Indexes(
	    @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class Zipcode {
	@Id
//	private ObjectId id;
	private String zipcode;
	
	// calculated result entry	
	private Double FoodScore;
	private Double EducationScore;
	private Double TrafficScore;
	private Double AverageScore;
	
	// already existed data collections
	private FoodData FoodData;
	private TrafficData TrafficData;
	private SchoolData EducationData;
	
	// manually added entry, may need more
	private ArrayList<String> images;
	private String description;
	private String region;
	
	// Required	
	private Zipcode() {};
	
	public Zipcode(String zipcode, Double FoodScore, Double TrafficScore, Double EducationScore, Double AverageScore,
					FoodData FoodData, TrafficData TrafficData, SchoolData EducationData) {
		this.zipcode = zipcode;
		this.FoodScore = FoodScore;
		this.TrafficScore = TrafficScore;
		this.EducationScore = EducationScore;
		this.AverageScore = AverageScore;
		this.FoodData = FoodData;
		this.TrafficData = TrafficData;
		this.EducationData = EducationData;
		this.images = new ArrayList<String>();
		this.description = "";
		this.region = "";
		
	}
	
	public String toString() {
		return "ZipCode: "+zipcode+" FoodScore: "+FoodScore+" EducationIndex: "+EducationScore+" TrafficIndex: "+TrafficScore;
	}
}

