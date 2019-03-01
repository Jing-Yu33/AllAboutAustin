package database.datacollection;

import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;

/**
 * Handles all data collection interactions with the MongoDB database.
 * This should implement the MongoDB Java framework. 
 */

public class MongoStorage {
	static MongoClient mongoClient;
	static MongoDatabase db;
	
	static Morphia morphia;
	static Datastore datastore;
	
	enum DataTypes {TRAFFIC_DATA, EDUCATION_DATA, FOOD_DATA};
	
	public static void setUp() {
		
		// Connect to Mongo DB
		MongoClientURI uri = new MongoClientURI("mongodb://wyx:wangyixing@personal-shard-00-00-fxnjy.mongodb.net:27017,personal-shard-00-01-fxnjy.mongodb.net:27017,personal-shard-00-02-fxnjy.mongodb.net:27017/test?ssl=true&replicaSet=personal-shard-0&authSource=admin&retryWrites=true");
		mongoClient = new MongoClient(uri);
		
		// Set up Morphia connect to database and collection
		morphia = new Morphia();
		morphia.mapPackage("mongoDB");
		datastore = morphia.createDatastore(mongoClient, "testDB");
		datastore.ensureIndexes();
		
		// Get Particular Database and Collections
		//db = mongoClient.getDatabase("testDB");
		//MongoCollection<Document> collection = db.getCollection("zipcode");
	}
	
	
	// Recieve List<DataSet> from Collectors	
	public static void saveData(DataSet list, DataTypes datatype) {
//		Zipcode zipcode = new Zipcode("78731", 5.2, 6.3, 8.5);
//		datastore.save(zipcode);
//		zipcode = new Zipcode("78705", 10.3, 7.8, 4.9);
//		datastore.save(zipcode);
	}
	
	public static void updateData() {
		
	}
	
//	public static void queryData() {
//		Query<Zipcode> query = datastore.createQuery(Zipcode.class);
//		List<Zipcode> zipcodes = query.asList();
//		for(Zipcode zipcode : zipcodes) {
//			System.out.println(zipcode);
//		}
//	}
	
//	public static void main(String[] args) {
//		setUp();
//		saveData();
//		queryData();
//	}
}
