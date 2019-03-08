package info.allaboutaustin.RestfulApi.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "Foods")
public class Food {
	@Id
	private String zipcode;
	private Double aggregate_rating;
	// Required	
	private Food() {};
	
	public Food(String zipcode, Double aggregate_rating) {
		this.zipcode = zipcode;
		this.aggregate_rating = aggregate_rating;
	}
}
