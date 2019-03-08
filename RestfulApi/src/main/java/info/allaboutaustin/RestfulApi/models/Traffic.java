package info.allaboutaustin.RestfulApi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "Traffics")
public class Traffic {
	@Id
	private String zipcode;
	
	public Traffic(String zipcode) {
		this.zipcode = zipcode;
	}
}
