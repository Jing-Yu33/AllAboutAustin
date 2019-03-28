package info.allaboutaustin.RestfulApi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "Traffics")
public class TrafficData {
	@Id
	private String zipcode;
	
	public TrafficData(String zipcode) {
		this.zipcode = zipcode;
	}
}
