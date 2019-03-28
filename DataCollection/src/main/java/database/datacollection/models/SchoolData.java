package database.datacollection.models;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;


@Entity("School_Data")
@Indexes(
	    @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class SchoolData {
	@Id @Property
	private String zipcode;
	
	private Double _2016_rate;
	
	// Required	
	private SchoolData() {};
	
	public SchoolData(String zipcode,  Double _2016_rate) {
		this.zipcode = zipcode;
		this._2016_rate = _2016_rate;
	}

	public String getZipcode() {
		return zipcode;
	}

	public Double getAggregate_rating() {
		return _2016_rate;
	}
}

