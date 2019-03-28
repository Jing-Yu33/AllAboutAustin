package database.datacollection;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;

import database.datacollection.models.*;

/**
 * Handles all data collection interactions with the MongoDB database.
 * This should implement the MongoDB Java framework. 
 */

public class MongoStorage {
	static MongoClient mongoClient;
	static MongoDatabase db;
	
	static Morphia morphia;
	static Datastore datastore;
	
	enum DataTypes {TRAFFIC_DATA, EDUCATION_DATA, FOOD_DATA, TRAFFIC_SENSOR_DATA,
						TRAFFIC_RAW_DATA, EDUCATION_RAW_DATA, FOOD_RAW_DATA};
	
	public static void setUp() {
		
		// Connect to Mongo DB
		MongoClientURI uri = new MongoClientURI("mongodb://aaa:allaboutaustin@allaboutaustin-shard-00-00-hptoi.mongodb.net:27017,allaboutaustin-shard-00-01-hptoi.mongodb.net:27017,allaboutaustin-shard-00-02-hptoi.mongodb.net:27017/test?ssl=true&replicaSet=AllAboutAustin-shard-0&authSource=admin&retryWrites=true");
		mongoClient = new MongoClient(uri);
		
		// Set up Morphia connect to database and collection
		morphia = new Morphia();
		morphia.mapPackage("database.datacollection.models");
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
													   properties.get("speed"));
					
					datastore.save(data);		
				}
				break;
			}
		    
		  case EDUCATION_DATA:{
			  for(Integer zipcode: ds.zipData.keySet()) {
					HashMap<String, Double> properties = ds.zipData.get(zipcode);
					SchoolData data = new SchoolData(zipcode.toString(),
													  properties.get("_2016_rate"));
					datastore.save(data);								 		
			   }
			  break;
		  }
		    // code block
		    
		  case FOOD_DATA:{
			  for(Integer zipcode: ds.zipData.keySet()) {
					HashMap<String, Double> properties = ds.zipData.get(zipcode);
					FoodData data = new FoodData(zipcode.toString(), 
												properties.get("aggregate_rating"), new HashMap<String, Double>());
					// TODO: Add the hashmap part, if necessary, if not, we can just delete all this?
					
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

		  
		// Raw Data Types
			
			case TRAFFIC_RAW_DATA: {
				for(Integer zipcode: ds.zipData.keySet()) {
						HashMap<String, Double> properties = ds.zipData.get(zipcode);
						TrafficRawData data = new TrafficRawData(zipcode.toString(), properties);
						datastore.save(data);								 		
				}
				break;
			}

			case EDUCATION_RAW_DATA: {
				for(Integer zipcode: ds.zipData.keySet()) {
						HashMap<String, Double> properties = ds.zipData.get(zipcode);
						SchoolRawData data = new SchoolRawData(zipcode.toString(), properties);
						datastore.save(data);								 		
				}
				break;
			}
			
			case FOOD_RAW_DATA: {
				for(Integer zipcode: ds.zipData.keySet()) {
					HashMap<String, Double> properties = ds.zipData.get(zipcode);
					FoodRawData data = new FoodRawData(zipcode.toString(), properties);
					datastore.save(data);								 		
			}
			break;
		}
		}
	}
	

	public static ArrayList<FoodData> getFoodData()
	{
		Query<FoodData> query = datastore.createQuery(FoodData.class);
		List<FoodData> datapoints = query.asList();
		return new ArrayList<FoodData>(datapoints);
	}

	public static FoodRawData getFoodRawData(String zipcode)
	{
		Query<FoodRawData> query = datastore.createQuery(FoodRawData.class).field("zipcode").equal(zipcode);
		List<FoodRawData> datapoints = query.asList();
		if (datapoints.size() > 0)
			return datapoints.get(0);
		else
			return null;
	}

	public static ArrayList<TrafficData> getTrafficData()
	{
		Query<TrafficData> query = datastore.createQuery(TrafficData.class);
		List<TrafficData> datapoints = query.asList();
		return new ArrayList<TrafficData>(datapoints);
	}

	public static TrafficRawData getTrafficRawData(String zipcode)
	{
		Query<TrafficRawData> query = datastore.createQuery(TrafficRawData.class).field("zipcode").equal(zipcode);
		List<TrafficRawData> datapoints = query.asList();
		if (datapoints.size() > 0)
			return datapoints.get(0);
		else
			return null;
	}

	public static ArrayList<SchoolData> getSchoolData()
	{
		Query<SchoolData> query = datastore.createQuery(SchoolData.class);
		List<SchoolData> datapoints = query.asList();
		return new ArrayList<SchoolData>(datapoints);
	}

	public static SchoolRawData getSchoolRawData(String zipcode)
	{
		Query<SchoolRawData> query = datastore.createQuery(SchoolRawData.class).field("zipcode").equal(zipcode);
		List<SchoolRawData> datapoints = query.asList();
		if (datapoints.size() > 0)
			return datapoints.get(0);
		else
			return null;
	}
	
	public static ArrayList<TrafficSensorData> getSensorData() {
		Query<TrafficSensorData> query = datastore.createQuery(TrafficSensorData.class);
		List<TrafficSensorData> datapoints = query.asList();
		return new ArrayList<TrafficSensorData>(datapoints);
	}
	
	public static TrafficSensorData getSensorData(String id) {
		Query<TrafficSensorData> query = datastore.createQuery(TrafficSensorData.class).field("kits_id").equal(id);
		List<TrafficSensorData> datapoints = query.asList();
		
		if (datapoints.size() < 1)
			return null;
		else
			return datapoints.get(0);
	}
	
	
	public static void saveCombinedZipcodeData() throws IOException {
		
		for(String zipcode: ZipcodeCollector.getZipcodes()) {
			
			//TODO: score calculation
			Double fs = Averaging.getFoodAverage(zipcode);
			Double ts = Averaging.getTrafficAverage(zipcode);
			Double es = Averaging.getSchoolAverage(zipcode);
			Double as = (fs + ts + es)/3;
			
			Query<FoodRawData> query_food = datastore.createQuery(FoodRawData.class).field("zipcode").contains(zipcode);
			FoodRawData frd = query_food.asList().get(0);
			FoodData fd = new FoodData(zipcode, fs, frd.getPoints());

			Query<TrafficRawData> query_traffic = datastore.createQuery(TrafficRawData.class).field("zipcode").contains(zipcode);
			TrafficRawData trd = query_traffic.asList().get(0);
			TrafficData td = new TrafficData(zipcode, ts);
			
			Query<SchoolRawData> query_education = datastore.createQuery(SchoolRawData.class).field("zipcode").contains(zipcode);
			SchoolRawData erd = query_education.asList().get(0);
			SchoolData ed = new SchoolData(zipcode, es);

			
			Zipcode zc = new Zipcode(zipcode, fs, ts, es, as, fd, td, ed);
			datastore.save(zc);
		}
		
		
	}
}
