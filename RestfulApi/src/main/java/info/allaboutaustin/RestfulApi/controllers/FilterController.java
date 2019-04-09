package info.allaboutaustin.RestfulApi.controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
							@RequestParam(name="educationGt", required=false, defaultValue="0") String educationGt,
							@RequestParam(name="regions", required=false, defaultValue="") String regions,
							@RequestParam(name="hospitals") String hospitals,
							@RequestParam(name="cinemas") String cinemas) {
		
		Set<Zipcode> zipcodesSet = new HashSet<Zipcode>(ZipcodeRepo.findAll());
		
		Integer foodGtNum = Integer.parseInt(foodGt);
		Integer trafficGtNum = Integer.parseInt(trafficGt);
		Integer educationGtNum = Integer.parseInt(educationGt);
		Set<Zipcode> zipcodesByRating = new HashSet<Zipcode>(ZipcodeRepo.findByCategoryScoreGreaterThanQuery(foodGtNum, trafficGtNum, educationGtNum));
		zipcodesSet.retainAll(zipcodesByRating);
		
		
		String[] regionArr = regions.split(",");
		if(regions.length() > 1) {
			Set<Zipcode> zipcodesByRegion = new HashSet<Zipcode>();
			for(String region: regionArr) {
				List<Zipcode> list = ZipcodeRepo.findByRegionQuery(region);
				zipcodesByRegion.addAll(new HashSet(list));
			}
			zipcodesSet.retainAll(zipcodesByRegion);
		}

		if(hospitals.equals("true")) {
			Set<Zipcode> zipcodesByHospital = new HashSet<Zipcode>(ZipcodeRepo.findByNumOfHospitals(0));
			zipcodesSet.retainAll(zipcodesByHospital);
		}
		
		if(cinemas.equals("true")) {
			Set<Zipcode> zipcodesByCinemas = new HashSet<Zipcode>(ZipcodeRepo.findByNumOfCinemas(0));
			zipcodesSet.retainAll(zipcodesByCinemas);
		}
		
		

		List<Zipcode> zipcodes = new ArrayList<Zipcode>(zipcodesSet);
		
		
		return zipcodes;
	}
	
	
}
