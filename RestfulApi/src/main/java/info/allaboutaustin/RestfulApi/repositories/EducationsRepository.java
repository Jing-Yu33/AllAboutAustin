package info.allaboutaustin.RestfulApi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import info.allaboutaustin.RestfulApi.models.Education;


public interface EducationsRepository extends MongoRepository<Education, String>{
	Education findByZipcode(String zipcode);
}
