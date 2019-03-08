package info.allaboutaustin.RestfulApi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import info.allaboutaustin.RestfulApi.models.Food;
import info.allaboutaustin.RestfulApi.models.Traffic;

public interface TrafficsRepository  extends MongoRepository<Traffic, String>{
	Traffic findByZipcode(String zipcode);
}
