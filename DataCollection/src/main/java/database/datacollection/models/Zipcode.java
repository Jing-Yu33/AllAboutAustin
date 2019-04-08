package database.datacollection.models;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

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
	private List<String> images;
	private String description;
	private String region;
	private int NumOfHospitals;
	private List<String> ListOfHospitals;
	private int NumOfCinemas;
	private List<String> ListOfCinemas;
	
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
	
	public void setCSVProperties(HashMap<String, String> data) {
		for (String key : data.keySet()) {
			if (key.equals("region")) {
				this.region = data.get(key);
			}
			if (key.equals("descripiton")) {
				this.description = data.get(key);
			}
			if (key.equals("images")) {
				this.images = Arrays.asList(data.get(key).split(","));;
			}
			if (key.equals("NumOfHospitals")) {
				try {
					this.NumOfHospitals = Integer.parseInt(data.get(key));
				} catch (NumberFormatException e) {
					System.out.println("Error parsing NumOfHospitals for zipcode " + this.zipcode);
				}
			}
			if (key.equals("ListOfHospitals")) {
				this.ListOfHospitals = Arrays.asList(data.get(key).split(","));;
			}
			if (key.equals("NumOfCinemas")) {
				try {
					this.NumOfCinemas = Integer.parseInt(data.get(key));
				} catch (NumberFormatException e) {
					System.out.println("Error parsing NumOfCinemas for zipcode " + this.zipcode);
				}
			}
			if (key.equals("ListOfCinemas")) {
				this.ListOfCinemas = Arrays.asList(data.get(key).split(","));;
			}
		}
	}
	
	public String toString() {
		return "ZipCode: "+zipcode+" FoodScore: "+FoodScore+" EducationIndex: "+EducationScore+" TrafficIndex: "+TrafficScore;
	}
}

