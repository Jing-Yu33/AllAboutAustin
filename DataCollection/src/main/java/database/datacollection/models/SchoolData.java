package database.datacollection.models;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;

import java.util.HashMap;


@Entity("School_Data")
@Indexes(
	    @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class SchoolData {
	@Id @Property
	private String zipcode;
	private Double _2016_rate;
	private HashMap<String, Double> schools;

	// Required	
	private SchoolData() {};
	
	public SchoolData(String zipcode,  Double _2016_rate, HashMap<String, Double> schools) {
		this.zipcode = zipcode;
		this._2016_rate = _2016_rate;
		this.schools = schools;
	}

	public String getZipcode() {
		return zipcode;
	}

	public Double getAggregate_rating() {
		return _2016_rate;
	}
}

