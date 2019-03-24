package database.datacollection;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;

@Entity("Traffic_Sensor_Data")
@Indexes(
	    @Index(value = "kits_id", fields = @Field("kits_id"))
)

public class TrafficSensorData {
	@Id
	private ObjectId id;
	private String kits_id;
	private Double lat;
	private Double lon;
	
	// Required	
	private TrafficSensorData() {};
	
	public TrafficSensorData(String kits_id, Double lat, Double lon) {
		this.kits_id = kits_id;
		this.lat = lat;
		this.lon = lon;		
	}

}
