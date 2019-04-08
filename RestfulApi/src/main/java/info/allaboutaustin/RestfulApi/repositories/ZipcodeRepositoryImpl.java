package info.allaboutaustin.RestfulApi.repositories;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public class ZipcodeRepositoryImpl implements ZipcodesRepositoryCustom{

	private final MongoTemplate mongoTemplate;
	
	@Autowired
	public ZipcodeRepositoryImpl(MongoTemplate mongoTemplate) {
		this.mongoTemplate = mongoTemplate;
	}
	
	@Override
	public List<Zipcode> query(DynamicQuery dynamicQuery) {
		final Query query = new Query();
		final List<Criteria> criteria = new ArrayList<>();
		
			criteria.add(Criteria.where("region").gte(dynamicQuery.getFoodScoreGreaterThan()));
		return mongoTemplate.find(query, Zipcode.class);
	}
	
}
