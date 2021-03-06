package info.allaboutaustin.RestfulApi.controllers;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TreeMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import info.allaboutaustin.RestfulApi.exception.ParameterNotValidException;
import info.allaboutaustin.RestfulApi.exception.ZipcodeNotFoundException;
import info.allaboutaustin.RestfulApi.models.FoodData;
import info.allaboutaustin.RestfulApi.models.SchoolData;
import info.allaboutaustin.RestfulApi.models.TrafficData;
import info.allaboutaustin.RestfulApi.models.Zipcode;
import info.allaboutaustin.RestfulApi.models.ZipcodeComparators.ZipcodeAverageScoreComparator;
import info.allaboutaustin.RestfulApi.models.ZipcodeComparators.ZipcodeEducationComparator;
import info.allaboutaustin.RestfulApi.models.ZipcodeComparators.ZipcodeFoodComparator;
import info.allaboutaustin.RestfulApi.models.ZipcodeComparators.ZipcodeTotalScoreComparator;
import info.allaboutaustin.RestfulApi.models.ZipcodeComparators.ZipcodeTrafficComparator;
import info.allaboutaustin.RestfulApi.models.ZipcodeComparators.ZipcodesCamparatorFactory;
import info.allaboutaustin.RestfulApi.repositories.ZipcodesRepository;

@RestController
@CrossOrigin(origins = "*")	
@RequestMapping("/zipcodes")
public class ZipcodesResource {
	
	@Autowired
	ZipcodesRepository ZipcodeRepo;

	ZipcodesCamparatorFactory zcf = new ZipcodesCamparatorFactory();
	ZipcodeTotalScoreComparator tsc = new ZipcodeTotalScoreComparator();
	
	//Helper Method: sorting list by specific category order
	private void sortByCategory(List<Zipcode> list, String category){
		Collections.sort(list, zcf.createComparator(category));
	}
	
	/*	Return zipcodes information
	 *  sortBy: sorting by specific category
	 *  order: ascending order or descending order
	 */
	@GetMapping("")
	public List<Zipcode> getAllZipcodes(
			@RequestParam(name="sortBy", required=false, defaultValue="average") String sortBy,
			@RequestParam(name="order", required=false, defaultValue="desc") String order){
		
		List<Zipcode> list = ZipcodeRepo.findAll();
			
		sortByCategory(list, sortBy);
		
		if(!order.equals("asc") && !order.equals("desc")) {
			throw new ParameterNotValidException("Order should be asc or desc, which represented ascending/descending order, please verify your input URL");
		}
			
		if(order.equals("asc"))	Collections.reverse(list);
			
		return list;
	}
	
	@PostMapping("")
	public List<Zipcode> getListOfZipcodesDetail(@RequestBody List<String> zipcodes) {
		List<Zipcode> list = new ArrayList<>();
		for(String zipcode : zipcodes) {
			list.add(ZipcodeRepo.findByZipcode(zipcode));
		}
		return list;
	}
	
	// /{zipcode}: Return a specific zipcode information by 5-digits zipcode
	@GetMapping("/{zipcode}")
	public Zipcode getZipcode(@PathVariable String zipcode) {
		Zipcode zc = ZipcodeRepo.findByZipcode(zipcode);
		if(zc == null) {
			throw new ZipcodeNotFoundException("Zipcode "+zipcode+" not found.");
		}
		return zc;
	}
		
	// ?food=&traffic=&education=: Return a ranking list of 10 top zipcodes based on user-assigned weight
	@GetMapping("/ranking")
	public List<Zipcode> searchZipcodeByParameters(
			@RequestParam(name="food", required=false, defaultValue="50") String food,
			@RequestParam(name="education", required=false, defaultValue="50") String education,
			@RequestParam(name="traffic", required=false, defaultValue="50") String traffic) {
		
		
		Integer foodWeight = 0;
		Integer trafficWeight = 0;
		Integer educationWeight = 0;

		try {
			foodWeight = Integer.parseInt(food);
			trafficWeight = Integer.parseInt(traffic);
			educationWeight = Integer.parseInt(education);
		}catch (Exception e) {
			throw new ParameterNotValidException("Category Weight must be Positive Integer Number between 0-100, please verify your input URL");
		}
		
		if((foodWeight<0 || foodWeight>100) || (educationWeight<0 || educationWeight>100) || (trafficWeight<0 || trafficWeight>100)) {
			throw new ParameterNotValidException("Category Weight must be Positive Integer Number between 0-100, please verify your input URL");
		}
		
		List<Zipcode> zipcodes = ZipcodeRepo.findAll();
		for(Zipcode zc: zipcodes) {
			Double totalScore = zc.getFoodScore() * foodWeight +
								zc.getEducationScore() * educationWeight +
								zc.getTrafficScore() * trafficWeight;
			zc.setTotalScore(totalScore);
		}
		Collections.sort(zipcodes, tsc);
		zipcodes = zipcodes.subList(0, 10);
		return zipcodes;
	}
	
	// Private API
	@GetMapping("/top10")
	public List<Zipcode> getTop10ZipcodesByCategory(
			@RequestParam(name="category") String category,
			@RequestParam(name="sortBy", required=false, defaultValue="") String sortBy,
			@RequestParam(name="order", required=false, defaultValue="desc") String order){
		
		List<Zipcode> list = ZipcodeRepo.findAll();
		
		sortByCategory(list, category);
		list = list.subList(0, 10);
		
		sortByCategory(list, sortBy);
		if(order.equals("asc"))	Collections.reverse(list);
				
		return list;
	}
		
}
