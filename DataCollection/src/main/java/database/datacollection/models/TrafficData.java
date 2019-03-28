package database.datacollection.models;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;

import java.util.HashMap;


@Entity("Traffic_Data")
@Indexes(
	    @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class TrafficData {
	@Id @Property
	private String zipcode;
	private Double speed;
	private HashMap<String, Double> sensors;

	
	// Required	
	private TrafficData() {};
	
	public TrafficData(String zipcode, Double speed, HashMap<String, Double> sensors) {
		
		this.zipcode =zipcode;
		this.speed = speed;
		this.sensors = sensors;
		
	}


	public String getZipcode() {
		return zipcode;
	}

	public Double getAggregate_rating(){

		return speed;
	}
}

