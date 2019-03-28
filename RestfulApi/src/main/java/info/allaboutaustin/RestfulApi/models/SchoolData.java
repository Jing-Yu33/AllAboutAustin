package info.allaboutaustin.RestfulApi.models;

import java.util.HashMap;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "Educations")
public class SchoolData {
	@Id
	private String zipcode;
	private Double _2016_rate;
	private HashMap<String, Double> schools;
	
	private SchoolData() {}
}
