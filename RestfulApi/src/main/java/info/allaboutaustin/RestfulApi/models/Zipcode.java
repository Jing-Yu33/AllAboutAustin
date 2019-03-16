package info.allaboutaustin.RestfulApi.models;

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
//	private ObjectId _id;
	private String zipcode;
	private Double foodScore;
	private Double trafficScore;
	private Double educationScore;
	private String desc;
	private String region;
	private Food foodData;
	
	@Setter
	@JsonIgnore
	private Double totalScore;
	
	protected Zipcode() {}

	public Zipcode(String zipcode, String foodScore, String trafficScore, String educationScore, String desc, String region, Food foodData) {
		super();
		this.zipcode = zipcode;
		this.foodScore = Double.parseDouble(foodScore);
		this.trafficScore = Double.parseDouble(trafficScore);
		this.educationScore = Double.parseDouble(educationScore);
		this.desc = desc;
		this.region = region;
		this.foodData = foodData;
	}

}
