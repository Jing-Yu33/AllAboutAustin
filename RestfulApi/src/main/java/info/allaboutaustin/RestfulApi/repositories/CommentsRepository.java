package info.allaboutaustin.RestfulApi.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import info.allaboutaustin.RestfulApi.models.Comment;

public interface CommentsRepository extends MongoRepository<Comment, String>{
	List<Comment> findByZipcode(String zipcode);
//	List<Comment> findByUserId(String userId);
}
