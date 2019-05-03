package database.datacollection;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

import java.util.List;

import database.datacollection.models.*;

public class Averaging {
    public static double getFoodAverage(String zip){
        FoodRawData foodFullData = MongoStorage.getInstance().getFoodRawData(zip);
        if (foodFullData == null)
            return 0;
        HashMap<String, Double> foodData = foodFullData.getPoints();
        return runKeys(foodData);
    }

    public static double getTrafficAverage(String zip) {	//MongoStorage.getZipcode.surroundingdata
        TrafficRawData trafficFullData = MongoStorage.getInstance().getTrafficRawData(zip);
        if (trafficFullData == null)
            return 0;
        HashMap<String, Double> trafficData = trafficFullData.getPoints();
        return runKeys(trafficData);
    }
    
    public static double getSchoolAverage(String zip) {
    	double score = 0.0;
    	MongoStorage ms = MongoStorage.getInstance();
        SchoolRawData schoolFullData = ms.getSchoolRawData(zip);
        if (schoolFullData == null){
        	List<String> surroundList= ms.getZipcodeData(zip).SurroundingZip;
        	for(int i = 0; i < surroundList.size(); i++) {
        		if(ms.getSchoolRawData(surroundList.get(i)) != null) {
        			score = .5 * runKeys(ms.getSchoolRawData(surroundList.get(i)).getPoints());
        			break;
        		}
        	}
        } else{
        	HashMap<String, Double> schoolData = schoolFullData.getPoints();
        	score = runKeys(schoolData);
        }
        return score;
    }
    
    
    
    /**
     * Given a points set, run through all of them and return the double average of all the doubles therein.
     * @param dataset
     * @return
     */
    private static double runKeys(HashMap<String, Double> dataset) {
        double runningSum = 0;
        double count = 0;
        for(String item : dataset.keySet())
        {
             count++;
             runningSum += dataset.get(item);
        }
        if(count > 0)
            return runningSum/count;
        else return 0.0;
    }
}
