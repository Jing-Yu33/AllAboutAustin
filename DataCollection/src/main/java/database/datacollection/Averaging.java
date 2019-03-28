package database.datacollection;

import java.util.HashMap;

import database.datacollection.models.*;

public class Averaging {
    public double getFoodAverage(String zip){
        FoodRawData foodFullData = MongoStorage.getFoodRawData(zip);
        HashMap<String, Double> foodData = foodFullData.getPoints();
        return runKeys(foodData);
    }

    public double getTrafficAverage(String zip) {
        TrafficRawData trafficFullData = MongoStorage.getTrafficRawData(zip);
        HashMap<String, Double> trafficData = trafficFullData.getPoints();
        return runKeys(trafficData);
    }

    public double getSchoolAverage(String zip) {
        SchoolRawData schoolFullData = MongoStorage.getSchoolRawData(zip);
        HashMap<String, Double> trafficData = schoolFullData.getPoints();
        return runKeys(trafficData);
    }
    
    /**
     * Given a points set, run through all of them and return the double average of all the doubles therein.
     * @param dataset
     * @return
     */
    private double runKeys(HashMap<String, Double> dataset) {
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
