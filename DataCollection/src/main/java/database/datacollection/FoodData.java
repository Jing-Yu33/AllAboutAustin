package database.datacollection;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;


@Entity("Food_Data")
@Indexes(
	    @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class FoodData {
	@Id
	private ObjectId id;
	private String zipcode;
	private Double aggregate_rating;
	
	// Required	
	private FoodData() {};
	
	public FoodData(String zipcode, Double aggregate_rating) {
		this.zipcode = zipcode;
		this.aggregate_rating = aggregate_rating;
	}
}

