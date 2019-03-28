package info.allaboutaustin.RestfulApi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import info.allaboutaustin.RestfulApi.models.SchoolData;


public interface EducationsRepository extends MongoRepository<SchoolData, String>{
	SchoolData findByZipcode(String zipcode);
}
