package info.allaboutaustin.RestfulApi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import info.allaboutaustin.RestfulApi.models.Food;
import info.allaboutaustin.RestfulApi.models.Zipcode;
import info.allaboutaustin.RestfulApi.repositories.FoodsRepository;
import info.allaboutaustin.RestfulApi.repositories.ZipcodesRepository;

@RestController
@RequestMapping("/api/zipcodes")
public class ZipcodesResource {
	
	@Autowired
	ZipcodesRepository ZipcodeRepo;

	// Return All zipcodes info in JSON format
	@GetMapping("")
	public List<Zipcode> getAllZipcodes(){
		List<Zipcode> list = ZipcodeRepo.findAll();
		return ZipcodeRepo.findAll();
	}
	
	// Return a specific zipcode information by 5-digits zipcode
	@GetMapping("/{zipcode}")
	public Zipcode getZipcode(@PathVariable String zipcode) {
		return ZipcodeRepo.findByZipcode(zipcode);
	}
	
	@PostMapping("/save")
	public void createZipCode() {
		ZipcodeRepo.deleteAll();
		Food food = new Food("78731", 5.2);
		Zipcode zc = new Zipcode("78731", "5", "5", "5", "desc", food);
		ZipcodeRepo.save(zc);
	}
	

}
