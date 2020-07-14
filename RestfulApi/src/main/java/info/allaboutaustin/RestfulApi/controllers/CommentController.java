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

import info.allaboutaustin.RestfulApi.models.Comment;
import info.allaboutaustin.RestfulApi.repositories.CommentsRepository;

@RestController
@CrossOrigin(origins = "*")	

@RequestMapping("/comments")
public class CommentController {
	@Autowired
	CommentsRepository commentRepo;
	
	@PostMapping("/{zipcode}/{userId}")
	public void createComment(@PathVariable String zipcode, @PathVariable String userId, @RequestBody String content) {
		Comment comment = new Comment(userId, zipcode, content);
		commentRepo.save(comment);
	}
	
	@GetMapping("/{zipcode}")
	public List<Comment> getCommentsByZipcodes(@PathVariable String zipcode) {
		List<Comment> list = commentRepo.findByZipcode(zipcode);
		return list;
	}
}
