package info.allaboutaustin.RestfulApi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import info.allaboutaustin.RestfulApi.models.Food;

public interface FoodsRepository extends MongoRepository<Food, String>{
	Food findByZipcode(String zipcode);
}
