package info.allaboutaustin.RestfulApi.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public interface ZipcodesRepository extends MongoRepository<Zipcode, String>{
//	Zipcode findFirstByZipcode(String zipcode);
	Zipcode findByZipcode(String zipcode);
	List<Zipcode> findByRegion(String region);
	
	@Query("{region : ?0}")
	List<Zipcode> findByRegionQuery(String region);
	
	@Query("{'$and' : [{'FoodScore' : {$gte : ?0}, 'TrafficScore' : {$gte : ?1}, 'EducationScore' : {$gte : ?2}}]}")
    List<Zipcode> findByCategoryScoreGreaterThanQuery(int food, int traffic, int education);
	
	// TODO: search by keyword, zipcode.descrption.contains, region.contains, .....
}
