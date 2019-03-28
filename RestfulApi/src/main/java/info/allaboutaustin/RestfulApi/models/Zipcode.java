package info.allaboutaustin.RestfulApi.models;

import java.util.ArrayList;

import javax.validation.constraints.Size;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;


import lombok.Getter;
import lombok.Setter;

@Getter
@Document(collection = "Zipcodes")
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
	
	@Setter
	@JsonIgnore
	private Double totalScore;
	
	protected Zipcode() {}

	public Zipcode(String zipcode, String FoodScore, String TrafficScore, String EducationScore, String AverageScore,
			FoodData FoodData, TrafficData TrafficData, SchoolData EducationData) {
		this.zipcode = zipcode;
		this.FoodScore = Double.parseDouble(FoodScore);
		this.TrafficScore = Double.parseDouble(TrafficScore);
		this.EducationScore = Double.parseDouble(EducationScore);
		this.AverageScore = Double.parseDouble(AverageScore);
		this.FoodData = FoodData;
		this.TrafficData = TrafficData;
		this.EducationData = EducationData;
		this.images = new ArrayList<String>();
		this.description = "desc";
		this.region = "west";
	}

	public String toString() {
	return "ZipCode: "+zipcode+" FoodScore: "+FoodScore+" EducationIndex: "+EducationScore+" TrafficIndex: "+TrafficScore;
	}

}
