package database.datacollection;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;


@Entity("Traffic_Data")
@Indexes(
	    @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class TrafficData {
	@Id
	private ObjectId id;
	private String zipcode;
	private Double detname;
	private Double intname;
	private Double occupancy;
	private Double year;
	private Double speed;
	private Double minute;
	private Double volume;
	private Double hour;
	private Double month;
	private Double timebin;
	private Double int_id;
	private Double row_id;
	private Double day;
	private Double detid;
	private Double curdatetime;
	private Double day_of_week;
	private Double direction;
	
	// Required	
	private TrafficData() {};
	
	public TrafficData(String zipcode, Double detname, Double intname, Double occupancy, Double year, 
						Double speed, Double minute, Double volume, Double hour, Double month,
						Double timebin, Double int_id, Double row_id, Double day, Double detid, Double curdatetime, 
						Double day_of_week, Double direction) {
		
		this.zipcode =zipcode;
		this.detname = detname;
		this.intname = intname;
		this.occupancy = occupancy;
		this.year = year;
		this.speed = speed;
		this.minute = minute;
		this.volume = volume;
		this.hour = hour;
		this.month = month;
		this.timebin = timebin;
		this.int_id = int_id;
		this.row_id = row_id;
		this.day = day;
		this.detid = detid;
		this.curdatetime = curdatetime;
		this.day_of_week = day_of_week;
		this.direction = direction;
		
	}
	

}

