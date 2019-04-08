package info.allaboutaustin.RestfulApi.controllers;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import info.allaboutaustin.RestfulApi.exception.ParameterNotValidException;
import info.allaboutaustin.RestfulApi.exception.ZipcodeNotFoundException;
import info.allaboutaustin.RestfulApi.models.Zipcode;
import info.allaboutaustin.RestfulApi.models.ZipcodeComparators.ZipcodeAverageScoreComparator;
import info.allaboutaustin.RestfulApi.models.ZipcodeComparators.ZipcodeEducationComparator;
import info.allaboutaustin.RestfulApi.models.ZipcodeComparators.ZipcodeFoodComparator;
import info.allaboutaustin.RestfulApi.models.ZipcodeComparators.ZipcodeTotalScoreComparator;
import info.allaboutaustin.RestfulApi.models.ZipcodeComparators.ZipcodeTrafficComparator;
import info.allaboutaustin.RestfulApi.repositories.ZipcodesRepository;

@RestController
@CrossOrigin(origins = "*")	// change to host name
@RequestMapping("/api/filter/zipcodes")
public class FilterController {

	@Autowired
	ZipcodesRepository ZipcodeRepo;
	
	ZipcodeTotalScoreComparator tsc = new ZipcodeTotalScoreComparator();
	ZipcodeAverageScoreComparator ac = new ZipcodeAverageScoreComparator();
	ZipcodeFoodComparator fc = new ZipcodeFoodComparator();
	ZipcodeEducationComparator ec = new ZipcodeEducationComparator();
	ZipcodeTrafficComparator tc = new ZipcodeTrafficComparator();
		
	// private API
	@GetMapping("")
	public List<Zipcode> filterZipcodeByRating (
							@RequestParam(name="foodGt", required=false, defaultValue="0") String foodGt,
							@RequestParam(name="trafficGt", required=false, defaultValue="0") String trafficGt,
							@RequestParam(name="educationGt", required=false, defaultValue="0") String educationGt) {
		
		Integer foodGtNum = Integer.parseInt(foodGt);
		Integer trafficGtNum = Integer.parseInt(trafficGt);
		Integer educationGtNum = Integer.parseInt(educationGt);

		
//		try {
//			foodGtNum = Integer.parseInt(foodGt);
////			trafficWeight = Integer.parseInt(traffic);
////			educationWeight = Integer.parseInt(education);
//		}catch (Exception e) {
//			throw new ParameterNotValidException("Category Number must be Integer Number between 0-10, please verify your input URL");
//		}
//		
//		if((foodGtNum<0 || foodGtNum>10)) {
//			throw new ParameterNotValidException("Category Number must be Positive Integer Number between 0-10, please verify your input URL");
//		}
		
		
		List<Zipcode> zipcodes = ZipcodeRepo.findByCategoryScoreGreaterThanQuery(foodGtNum, trafficGtNum, educationGtNum);
		
//		sortByCategory(zipcodes, sortBy);
		
//		if(!order.equals("asc") && !order.equals("desc")) {
//			throw new ParameterNotValidException("Order should be asc or desc, which represented ascending/descending order, please verify your input URL");
//		}
//			
//		if(order.equals("asc"))	Collections.reverse(zipcodes);
		
		return zipcodes;
	}
	
	
	@GetMapping("/{word}")
	public String searchZipcodeByKeyword(@PathVariable String word) {
		return word;
	}
	
//	@GetMapping("")
//	public List<Zipcode> searchZipcodeByParameters(
//						@RequestParam(name="region") String region
//						/*@RequestParam(name="") String a*/) {
//		
////		Query query = new Query();
////		query.addCriteria(Criteria.where("region").is(region));
////		List<Zipcode> zipcodes = ZipcodeRepo.findByRegionQuery(region);
//		List<Zipcode> zipcodes = ZipcodeRepo.findByRegion(region);
//		if(zipcodes.size() == 0) {
//			throw new ZipcodeNotFoundException("There is no zipcode in "+region+" region, please refer to our API documentation and verify your input URL");
//		}
//		return zipcodes;
//	}
}
