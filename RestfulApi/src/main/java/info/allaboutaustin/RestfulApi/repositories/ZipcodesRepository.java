package info.allaboutaustin.RestfulApi.repositories;

import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public interface ZipcodesRepository extends MongoRepository<Zipcode, String>{
	Zipcode findByZipcode(String zipcode);
	List<Zipcode> findByRegion(String region);
		
	@Query("{'NumOfHospitals' : {$gt : ?0} }")
	List<Zipcode> findByNumOfHospitals(int num);

	@Query("{'NumOfCinemas' : {$gt : ?0} }")
	List<Zipcode> findByNumOfCinemas(int num);
	
	@Query("{'$and' : [{'FoodScore' : {$gte : ?0}, 'TrafficScore' : {$gte : ?1}, 'EducationScore' : {$gte : ?2}}]}")
    List<Zipcode> findByCategoryScoreGreaterThanQuery(int food, int traffic, int education);
	
}
