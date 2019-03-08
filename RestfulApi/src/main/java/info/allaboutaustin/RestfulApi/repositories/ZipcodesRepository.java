package info.allaboutaustin.RestfulApi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public interface ZipcodesRepository extends MongoRepository<Zipcode, String>{
//	Zipcode findFirstByZipcode(String zipcode);
	Zipcode findByZipcode(String zipcode);
}
