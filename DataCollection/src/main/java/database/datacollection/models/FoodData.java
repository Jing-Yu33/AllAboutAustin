package database.datacollection.models;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;

import java.util.HashMap;


@Entity("Food_Data")
@Indexes(
	    @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class FoodData {
	@Id @Property
	private String zipcode;
	private Double aggregate_rating;
	private HashMap<String, Double> resturaunts;
	
	// Required	
	private FoodData() {};
	
	public FoodData(String zipcode, Double aggregate_rating, HashMap<String, Double> resturaunts) {
		this.zipcode = zipcode;
		this.aggregate_rating = aggregate_rating;
		this.resturaunts = resturaunts;
	}

	public String getZipcode() {
		return zipcode;
	}

	public Double getAggregate_rating() {
		return aggregate_rating;
	}
	
	public String toString() {
		return "zipcode: "+zipcode+" rating: "+aggregate_rating;
	}
}

