package database.datacollection;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;


@Entity("School_Data")
@Indexes(
	    @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class SchoolData {
	@Id
	private ObjectId id;
	private String zipcode;
	
	private Double school;
	private Double district;
	private Double school_type;
	
	private Double _2016_graduated;
	private Double _2016_rate;
	private Double _2016_class_size;
	
	private Double _2015_graduated;
	private Double _2015_rate;
	private Double _2015_class_size;
	

	
	private Double _2014_graduated;
	private Double _2014_rate;
	private Double _2014_class_size;

	// Required	
	private SchoolData() {};
	

}

