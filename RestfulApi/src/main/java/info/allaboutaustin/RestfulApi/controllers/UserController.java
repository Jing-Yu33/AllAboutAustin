package info.allaboutaustin.RestfulApi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import info.allaboutaustin.RestfulApi.exception.ParameterNotValidException;
import info.allaboutaustin.RestfulApi.exception.UserNotExistsException;
import info.allaboutaustin.RestfulApi.models.User;
import info.allaboutaustin.RestfulApi.repositories.UsersRepository;

@RestController
@CrossOrigin(origins = {
						"http://allaboutaustin-236003.appspot.com",
						"http://allaboutaustin.info",
						"http://www.allaboutaustin.info", 
						"http://localhost:3000"
						} 
			)	
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UsersRepository userRepo;
	
	@PostMapping("")
	public void createUser(@RequestBody UserInfo userInfo) {
		
		String googleId = userInfo.getGoogleId();
		String userName = userInfo.getUserName();

		User user = userRepo.findByGoogleId(googleId);
		if(user==null) {
			User newUser = new User(googleId, userName);
			userRepo.save(newUser);
		}
	}
	
	@GetMapping("/{googleId}")
	public List<String> GetUserZipcodes(@PathVariable String googleId) {
		User user = userRepo.findByGoogleId(googleId);
		if(user==null) {
			throw new UserNotExistsException("Current User is not exists");
		}
		return user.getLikedZipcodes();
	}
	
	@PostMapping("/{googleId}")
	public void addLikedZipcode(@RequestBody String zipcode, @PathVariable String googleId) {
		User user = userRepo.findByGoogleId(googleId);
		if(user==null) {
			throw new UserNotExistsException("Current User is not exists");
		}
		zipcode = zipcode.substring(0, zipcode.length()-1);
		if(!user.containZipcode(zipcode)) {
			user.addZipcodes(zipcode);
		}
		userRepo.save(user);
	}
	
	@PostMapping("/{googleId}/delete")
	public void removeLikedZipcode(@RequestBody String zipcode, @PathVariable String googleId) {
		User user = userRepo.findByGoogleId(googleId);
		if(user==null) {
			throw new UserNotExistsException("Current User is not exists");
		}
		zipcode = zipcode.substring(0, zipcode.length()-1);
		if(user.containZipcode(zipcode)) {
			user.removeZipcodes(zipcode);
		}
		userRepo.save(user);
	}
}
