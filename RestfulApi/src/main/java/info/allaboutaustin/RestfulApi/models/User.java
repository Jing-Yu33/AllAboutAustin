package info.allaboutaustin.RestfulApi.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;

@Getter
@Document(collection = "users")
public class User {
	@Id
	String googleId;
	List<String> likedZipcodes;
	
	protected User() {}

	public User(String googleId) {
		this.googleId = googleId;
		likedZipcodes = new ArrayList<String>();
	}
	
	public List<String> getZipcodes() {
		return likedZipcodes;
	}
	
	public boolean containZipcode(String zipcode) {
		return likedZipcodes.contains(zipcode);
	}
	
	public void addZipcodes(String zipcode) {
		likedZipcodes.add(zipcode);
	}
	
	public void removeZipcodes(String zipcode) {
		likedZipcodes.remove(zipcode);
	}
}
