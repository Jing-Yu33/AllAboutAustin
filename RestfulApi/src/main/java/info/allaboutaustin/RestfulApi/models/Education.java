package info.allaboutaustin.RestfulApi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "Educations")
public class Education {
	@Id
	private String zipcode;
	
	public Education(String zipcode) {
		this.zipcode = zipcode;
	}
}
