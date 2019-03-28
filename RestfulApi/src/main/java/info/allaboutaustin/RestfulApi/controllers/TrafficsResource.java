package info.allaboutaustin.RestfulApi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import info.allaboutaustin.RestfulApi.models.TrafficData;
import info.allaboutaustin.RestfulApi.models.Zipcode;
import info.allaboutaustin.RestfulApi.repositories.TrafficsRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")	// change to host name
@RequestMapping("/api/traffic")
public class TrafficsResource {
	
	@Autowired
	TrafficsRepository Trafficrepo;
	
	// Return All Traffic info in JSON format
	@GetMapping("")
	public List<TrafficData> getAllZipcodes(){
		return Trafficrepo.findAll();
	}
	
	// Return Traffic info of a specific zipcode
	@GetMapping("/{zipcode}")
	public TrafficData getZipcode(@PathVariable String zipcode) {
		return Trafficrepo.findByZipcode(zipcode);
	}
}
