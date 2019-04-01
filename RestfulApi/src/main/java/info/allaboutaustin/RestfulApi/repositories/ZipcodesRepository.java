package info.allaboutaustin.RestfulApi.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public interface ZipcodesRepository extends MongoRepository<Zipcode, String>{
//	Zipcode findFirstByZipcode(String zipcode);
	Zipcode findByZipcode(String zipcode);
	List<Zipcode> findByRegion(String region);
	// TODO: change to regular expression, ignore letter case, whitespace....
	@Query("{region : ?0}")
	List<Zipcode> findByRegionQuery(String region);
	
	// TODO: search by keyword, zipcode.descrption.contains, region.contains, .....
}
