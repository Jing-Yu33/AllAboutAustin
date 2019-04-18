package info.allaboutaustin.RestfulApi.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import info.allaboutaustin.RestfulApi.models.User;
import info.allaboutaustin.RestfulApi.models.Zipcode;

public interface UsersRepository extends MongoRepository<User, String>{
	User findByGoogleId(String googleId);
}
