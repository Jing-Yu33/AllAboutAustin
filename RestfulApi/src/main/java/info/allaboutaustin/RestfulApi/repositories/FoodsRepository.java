package info.allaboutaustin.RestfulApi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import info.allaboutaustin.RestfulApi.models.FoodData;

public interface FoodsRepository extends MongoRepository<FoodData, String>{
	FoodData findByZipcode(String zipcode);
}
