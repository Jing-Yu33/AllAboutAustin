package info.allaboutaustin.RestfulApi.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "Zipcodes")
public class Zipcode {
	@Id
//	private ObjectId _id;
	private String zipcode;
	private String foodScore;
	private String trafficScore;
	private String educationScore;
	private String desc;
	private Food foodData;
	protected Zipcode() {}

	public Zipcode(String zipcode, String foodScore, String trafficScore, String educationScore, String desc, Food foodData) {
		super();
		this.zipcode = zipcode;
		this.foodScore = foodScore;
		this.trafficScore = trafficScore;
		this.educationScore = educationScore;
		this.desc = desc;
		this.foodData = foodData;
	}	
}
