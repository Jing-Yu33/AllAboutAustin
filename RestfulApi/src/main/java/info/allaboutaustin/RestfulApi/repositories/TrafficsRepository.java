package info.allaboutaustin.RestfulApi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import info.allaboutaustin.RestfulApi.models.FoodData;
import info.allaboutaustin.RestfulApi.models.TrafficData;

public interface TrafficsRepository  extends MongoRepository<TrafficData, String>{
	TrafficData findByZipcode(String zipcode);
}
