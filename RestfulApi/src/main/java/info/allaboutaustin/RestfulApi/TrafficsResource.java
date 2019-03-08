package info.allaboutaustin.RestfulApi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import info.allaboutaustin.RestfulApi.models.Traffic;
import info.allaboutaustin.RestfulApi.models.Zipcode;
import info.allaboutaustin.RestfulApi.repositories.TrafficsRepository;

@RestController
@RequestMapping("/api/traffic")
public class TrafficsResource {
	
	@Autowired
	TrafficsRepository Trafficrepo;
	
	// Return All Traffic info in JSON format
	@GetMapping("")
	public List<Traffic> getAllZipcodes(){
		return Trafficrepo.findAll();
	}
	
	// Return Traffic info of a specific zipcode
	@GetMapping("/{zipcode}")
	public Traffic getZipcode(@PathVariable String zipcode) {
		return Trafficrepo.findByZipcode(zipcode);
	}
}
