package info.allaboutaustin.RestfulApi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import info.allaboutaustin.RestfulApi.models.Education;
import info.allaboutaustin.RestfulApi.models.Food;
import info.allaboutaustin.RestfulApi.models.Traffic;
import info.allaboutaustin.RestfulApi.repositories.EducationsRepository;
import info.allaboutaustin.RestfulApi.repositories.FoodsRepository;

@RestController
@RequestMapping("/api/education")
public class EducationsResource {

	@Autowired
	EducationsRepository EducationRepo;
	
	// Return All Food info in JSON format
	@GetMapping("")
	public List<Education> getAllFoods(){
		List<Education> list = EducationRepo.findAll();
		return EducationRepo.findAll();
	}
	
	// Return Education info of a specific zipcode
	@GetMapping("/{zipcode}")
	public Education getZipcode(@PathVariable String zipcode) {
		return EducationRepo.findByZipcode(zipcode);
	}
	
}
