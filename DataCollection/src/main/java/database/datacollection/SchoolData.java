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
	
	private Double _2016_graduated;
	private Double _2016_rate;
	private Double _2016_class_size;
	
	// Required	
	private SchoolData() {};
	
	public SchoolData(String zipcode, Double _2016_graduated, Double _2016_rate, Double _2016_class_size) {
		this.zipcode = zipcode;
		this._2016_graduated = _2016_graduated;
		this._2016_rate = _2016_rate;
		this._2016_class_size = _2016_class_size;
	}

}

