package info.allaboutaustin.RestfulApi.models;

import java.util.HashMap;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "Traffics")
public class TrafficData {
	@Id
	private String zipcode;
	private Double speed;
	private HashMap<String, Double> sensors;
	
	private TrafficData() {}
}
