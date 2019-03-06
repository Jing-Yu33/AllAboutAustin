package info.allaboutaustin.RestfulApi.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Zipcodes")
public class Zipcode {
	@Id
	private ObjectId _id;
	private String zipcode;
	private String food;
	private String traffic;
	private String education;
	private String desc;
	
	protected Zipcode() {}

	public Zipcode(String zipcode, String food, String traffic, String education, String desc) {
		super();
		this.zipcode = zipcode;
		this.food = food;
		this.traffic = traffic;
		this.education = education;
		this.desc = desc;
	}

	public String getZipcode() {
		return zipcode;
	}

	public String getFood() {
		return food;
	}

	public String getTraffic() {
		return traffic;
	}

	public String getEducation() {
		return education;
	}

	public String getDesc() {
		return desc;
	}
	
	
	
	
}
