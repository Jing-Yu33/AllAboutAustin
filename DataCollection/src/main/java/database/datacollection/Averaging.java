package database.datacollection;

import java.util.ArrayList;

import database.datacollection.models.FoodData;
import database.datacollection.models.SchoolData;
import database.datacollection.models.TrafficData;

public class Averaging {
    public double getFoodAverage(String zip){
        ArrayList<FoodData> foodData= MongoStorage.getFoodData();
        double runningSum = 0;
        double count = 0;
        for(int i=0;i<foodData.size();i++)
        {
             if(foodData.get(i).getZipcode().equals(zip)) {
                 count++;
                 runningSum += foodData.get(i).getAggregate_rating();
             }
        }
        if(count > 0)
            return 10*runningSum/count;
        else return 0.0;
    }

    public double getTrafficAverage(String zip){
        ArrayList<TrafficData> trafficData = MongoStorage.getTrafficData();
        double runningSum = 0;
        double count = 0;
        for(int i=0;i<trafficData.size();i++)
        {
            if(trafficData.get(i).getZipcode().equals(zip)) {
                count++;
                runningSum += trafficData.get(i).getAggregate_rating();
            }
        }
        if(count > 0)
            return runningSum/count;
        else return 100.0;
    }

    public double getSchoolAverage(String zip){
        ArrayList<SchoolData> schoolData= MongoStorage.getSchoolData();
        double runningSum = 0;
        double count = 0;
        for(int i=0;i<schoolData.size();i++)
        {
            if(schoolData.get(i).getZipcode().equals(zip)) {
                count++;
                runningSum += schoolData.get(i).getAggregate_rating();
            }
        }
        if(count > 0)
            return 100*runningSum/count;
        else return 0.0;
    }
}
