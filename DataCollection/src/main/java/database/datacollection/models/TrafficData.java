package database.datacollection.models;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;


@Entity("Traffic_Data")
@Indexes(
	    @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class TrafficData {
	@Id @Property
	private String zipcode;
	

	private Double speed;

	
	// Required	
	private TrafficData() {};
	
	public TrafficData(String zipcode, Double speed) {
		
		this.zipcode =zipcode;
		this.speed = speed;
		
	}


	public String getZipcode() {
		return zipcode;
	}

	public Double getAggregate_rating(){

		return speed;
	}
}

