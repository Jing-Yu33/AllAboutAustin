package info.allaboutaustin.RestfulApi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	public void createComment(@PathVariable String zipcode, @PathVariable String userId, @RequestBody CommentInfo commentInfo) {
		Comment comment = new Comment(userId, zipcode, commentInfo.getUserName(), commentInfo.getContent());
		commentRepo.save(comment);
	}
	
	@GetMapping("/{zipcode}")
	public List<Comment> getCommentsByZipcodes(@PathVariable String zipcode) {
		List<Comment> list = commentRepo.findByZipcode(zipcode);
		return list;
	}

	@GetMapping("/user/{userId}")
	public List<Comment> getCommentsByUserId(@PathVariable String userId) {
		List<Comment> list = commentRepo.findByUserId(userId);
		return list;
	}
	
	@DeleteMapping("/{commentId}")
	public void deleteComment(@PathVariable String commentId) {
		commentRepo.deleteById(commentId);
	}
}
