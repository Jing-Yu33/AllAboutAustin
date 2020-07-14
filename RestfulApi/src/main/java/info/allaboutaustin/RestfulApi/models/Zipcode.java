package info.allaboutaustin.RestfulApi.models;

import java.util.ArrayList;
import java.util.List;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;


import lombok.Getter;
import lombok.Setter;

@Getter
@Document(collection = "zipcodes")
public class Zipcode {
	@Id
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
	private int NumOfHospitals;
	private List<String> ListOfHospitals;
	private int NumOfCinemas;
	private List<String> ListOfCinemas;
	private List<String> SurroundingZip;
	
	//location 
	private Double latitude;
	private Double longtitude;
	
	@Setter
	@JsonIgnore
	private Double totalScore;
	
	protected Zipcode() {}

//	public Zipcode(String zipcode, String FoodScore, String TrafficScore, String EducationScore, String AverageScore,
//			FoodData FoodData, TrafficData TrafficData, SchoolData EducationData) {
//		this.zipcode = zipcode;
//		this.FoodScore = Double.parseDouble(FoodScore);
//		this.TrafficScore = Double.parseDouble(TrafficScore);
//		this.EducationScore = Double.parseDouble(EducationScore);
//		this.AverageScore = Double.parseDouble(AverageScore);
//		this.FoodData = FoodData;
//		this.TrafficData = TrafficData;
//		this.EducationData = EducationData;
//		this.images = new ArrayList<String>();
//		this.description = "desc";
//		this.region = "west";
//	}

	@Override
	public int hashCode() {
		return Integer.parseInt(zipcode);
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		
		Zipcode other = (Zipcode) obj;
		if (!zipcode.equals(other.zipcode))
			return false;

		return true;
	}
	
	public String toString() {
		return "ZipCode: "+zipcode;
	}

}
