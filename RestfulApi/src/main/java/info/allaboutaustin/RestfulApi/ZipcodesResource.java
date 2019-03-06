package info.allaboutaustin.RestfulApi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import info.allaboutaustin.RestfulApi.models.Zipcode;
import info.allaboutaustin.RestfulApi.repositories.ZipcodesRepository;

@RestController
@RequestMapping("/zipcodes")
public class ZipcodesResource {
	@Autowired
	ZipcodesRepository repo;
	
	@GetMapping("")
	public List<Zipcode> getAllZipcodes(){
		return repo.findAll();
	}
	
	@GetMapping("/{zipcode}")
	public Zipcode getZipcode(@PathVariable String zipcode) {
		return repo.findFirstByZipcode(zipcode);
	}
	
}
