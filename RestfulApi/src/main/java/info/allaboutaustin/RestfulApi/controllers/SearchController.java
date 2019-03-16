package info.allaboutaustin.RestfulApi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import info.allaboutaustin.RestfulApi.models.Zipcode;
import info.allaboutaustin.RestfulApi.repositories.ZipcodesRepository;

@RestController
@RequestMapping("/api/search")
public class SearchController {

	@Autowired
	ZipcodesRepository ZipcodeRepo;
	
	@GetMapping("/zipcodes/{word}")
	public String searchZipcodeByKeyword(@PathVariable String word) {
		return word;
	}
	
	@GetMapping("/zipcodes")
	public List<Zipcode> searchZipcodeByParameters(
						@RequestParam(name="region") String region
						/*@RequestParam(name="") String a*/) {
		
		Query query = new Query();
		query.addCriteria(Criteria.where("region").is(region));
		List<Zipcode> zipcodes = ZipcodeRepo.findByRegionQuery(region);
		return zipcodes;
	}
}
