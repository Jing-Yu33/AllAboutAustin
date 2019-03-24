package database.datacollection;

import java.util.HashMap;
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
	
	enum DataTypes {TRAFFIC_DATA, EDUCATION_DATA, FOOD_DATA, TRAFFIC_SENSOR_DATA};
	
	public static void setUp() {
		
		// Connect to Mongo DB
		MongoClientURI uri = new MongoClientURI("mongodb://amber:austindata@personal-shard-00-00-fxnjy.mongodb.net:27017,personal-shard-00-01-fxnjy.mongodb.net:27017,personal-shard-00-02-fxnjy.mongodb.net:27017/AustinData?ssl=true&replicaSet=personal-shard-0&authSource=admin&retryWrites=true");
		mongoClient = new MongoClient(uri);
		
		// Set up Morphia connect to database and collection
		morphia = new Morphia();
		morphia.mapPackage("database.datacollection");
		datastore = morphia.createDatastore(mongoClient, "AustinData");
		datastore.ensureIndexes();
	}
	
	
	// Recieve List<DataSet> from Collectors	
	public static void saveData(DataSet ds, DataTypes datatype) {
		
		switch(datatype) {
			case TRAFFIC_DATA:{
				for(Integer zipcode: ds.zipData.keySet()) {
					HashMap<String, Double> properties = ds.zipData.get(zipcode);
					TrafficData data = new TrafficData(zipcode.toString(), 
													   properties.get("detname"), properties.get("intname"), properties.get("occupancy"), properties.get("year"),
													   properties.get("speed"), properties.get("minute"), properties.get("volume"), properties.get("hour"),
													   properties.get("month"), properties.get("timebin"), properties.get("int_id"), properties.get("row_id"),
													   properties.get("day"), properties.get("detid"), properties.get("curdatetime"), properties.get("day_of_week"),
													   properties.get("direction"));
					
					datastore.save(data);		
				}
				break;
			}
		    
		  case EDUCATION_DATA:{
			  for(Integer zipcode: ds.zipData.keySet()) {
					HashMap<String, Double> properties = ds.zipData.get(zipcode);
					SchoolData data = new SchoolData(zipcode.toString(),
													 properties.get("_2016_graduated"), properties.get("_2016_rate"), properties.get("_2016_class_size"));
					datastore.save(data);								 		
			   }
			  break;
		  }
		    // code block
		    
		  case FOOD_DATA:{
			  for(Integer zipcode: ds.zipData.keySet()) {
					HashMap<String, Double> properties = ds.zipData.get(zipcode);
					FoodData data = new FoodData(zipcode.toString(), 
												properties.get("aggregate_rating"));
					
					datastore.save(data);		
			   }
			  break;
		  }
		    // code block
		  
		  case TRAFFIC_SENSOR_DATA:{
				for(Integer id: ds.zipData.keySet()) {
					HashMap<String, Double> properties = ds.zipData.get(id);
					TrafficSensorData data = new TrafficSensorData(id.toString(), 
													   properties.get("location_latitude"), properties.get("location_longitude"));
					
					datastore.save(data);
				}
				break;
	  		}
		}

		
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
