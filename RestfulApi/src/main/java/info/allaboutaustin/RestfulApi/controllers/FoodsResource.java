package info.allaboutaustin.RestfulApi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import info.allaboutaustin.RestfulApi.models.FoodData;
import info.allaboutaustin.RestfulApi.models.Zipcode;
import info.allaboutaustin.RestfulApi.repositories.FoodsRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")	// change to host name
@RequestMapping("/api/food")
public class FoodsResource {
	
	@Autowired
	FoodsRepository FoodRepo;
	
	// Return All Food info in JSON format
	@GetMapping("")
	public List<FoodData> getAllFoods(){
		List<FoodData> list = FoodRepo.findAll();
		return FoodRepo.findAll();
	}
	
	// Return Food info of a specific zipcode
	@GetMapping("/{zipcode}")
	public FoodData getFoodsByZipcode(@PathVariable String zipcode){
		return FoodRepo.findByZipcode(zipcode);
	}
	
	@PostMapping("/save")
	public void createZipCode() {
		FoodRepo.deleteAll();
		FoodData food = new FoodData("78705", 5.2);
		FoodRepo.save(food);
	}
}
