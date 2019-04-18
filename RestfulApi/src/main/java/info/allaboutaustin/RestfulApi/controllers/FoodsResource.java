package info.allaboutaustin.RestfulApi.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import info.allaboutaustin.RestfulApi.exception.ZipcodeNotFoundException;
import info.allaboutaustin.RestfulApi.models.FoodData;
import info.allaboutaustin.RestfulApi.models.Zipcode;
import info.allaboutaustin.RestfulApi.repositories.ZipcodesRepository;

@RestController
@CrossOrigin(origins = "*")	// change to host name
@RequestMapping("/food")
public class FoodsResource {
	
	@Autowired
	ZipcodesRepository ZipcodeRepo;
	
	// Return All Food info in JSON format
	@GetMapping("")
	public HashMap<String,FoodData> getAllFoods(){
		List<Zipcode> zipcodes = ZipcodeRepo.findAll();
		
		HashMap<String,FoodData> map = new HashMap<String,FoodData>();
		for(Zipcode zc : zipcodes) {
			map.put(zc.getZipcode(), zc.getFoodData());
		}
		
		return map;
	}
	
	// Return Food info of a specific zipcode
	@GetMapping("/{zipcode}")
	public FoodData getFoodsByZipcode(@PathVariable String zipcode){
		Zipcode zc = ZipcodeRepo.findByZipcode(zipcode);
		if(zc == null) {
			throw new ZipcodeNotFoundException("Zipcode "+zipcode+" not found.");
		}
		return zc.getFoodData();
	}
	

}
