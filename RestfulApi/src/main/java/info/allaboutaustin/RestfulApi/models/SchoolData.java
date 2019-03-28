package info.allaboutaustin.RestfulApi.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "Educations")
public class SchoolData {
	@Id
	private String zipcode;
	
	public SchoolData(String zipcode) {
		this.zipcode = zipcode;
	}
}
