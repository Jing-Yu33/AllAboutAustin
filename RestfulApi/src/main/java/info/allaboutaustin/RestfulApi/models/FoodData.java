package info.allaboutaustin.RestfulApi.models;

import java.util.HashMap;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "Foods")
public class FoodData {
	@Id
	private String zipcode;
	private Double aggregate_rating;
	private HashMap<String, Double> resturaunts;
	
	// Required	
	private FoodData() {};
	
}
