package info.allaboutaustin.RestfulApi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import info.allaboutaustin.RestfulApi.models.SchoolData;
import info.allaboutaustin.RestfulApi.models.FoodData;
import info.allaboutaustin.RestfulApi.models.TrafficData;
import info.allaboutaustin.RestfulApi.repositories.EducationsRepository;
import info.allaboutaustin.RestfulApi.repositories.FoodsRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")	// change to host name
@RequestMapping("/api/education")
public class EducationsResource {

	@Autowired
	EducationsRepository EducationRepo;
	
	// Return All Food info in JSON format
	@GetMapping("")
	public List<SchoolData> getAllFoods(){
		List<SchoolData> list = EducationRepo.findAll();
		return EducationRepo.findAll();
	}
	
	// Return Education info of a specific zipcode
	@GetMapping("/{zipcode}")
	public SchoolData getZipcode(@PathVariable String zipcode) {
		return EducationRepo.findByZipcode(zipcode);
	}
	
}
