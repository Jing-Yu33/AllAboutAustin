package info.allaboutaustin.RestfulApi.controllers;

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
import info.allaboutaustin.RestfulApi.models.TrafficData;
import info.allaboutaustin.RestfulApi.models.Zipcode;
import info.allaboutaustin.RestfulApi.repositories.ZipcodesRepository;

@RestController
@CrossOrigin(origins = "*")	// change to host name
@RequestMapping("/api/traffic")
public class TrafficsResource {
	
	@Autowired
	ZipcodesRepository ZipcodeRepo;
	
	// Return All Traffic info in JSON format
	@GetMapping("")
	public HashMap<String,TrafficData> getAllZipcodes(){
		List<Zipcode> zipcodes = ZipcodeRepo.findAll();
		
		HashMap<String,TrafficData> map = new HashMap<String,TrafficData>();
		for(Zipcode zc : zipcodes) {
			map.put(zc.getZipcode(), zc.getTrafficData());
		}
		
		return map;
	}
	
	// Return Traffic info of a specific zipcode
	@GetMapping("/{zipcode}")
	public TrafficData getZipcode(@PathVariable String zipcode) {
		Zipcode zc = ZipcodeRepo.findByZipcode(zipcode);
		if(zc == null) {
			throw new ZipcodeNotFoundException("Zipcode "+zipcode+" not found.");
		}
		return zc.getTrafficData();
	}
}
