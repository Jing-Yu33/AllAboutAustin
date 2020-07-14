package info.allaboutaustin.RestfulApi.models;

import java.util.ArrayList;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(collection = "comments")
public class Comment {
	@Id
	private ObjectId id = new ObjectId();
	private String userId;
	private String zipcode;
	private String userName;
	private String content;
//	private String date;
	
	public Comment(String userId, String zipcode, String userName, String content) {
		this.userId = userId;
		this.zipcode = zipcode;
		this.content = content;
		this.userName = userName;
	}
	

}
