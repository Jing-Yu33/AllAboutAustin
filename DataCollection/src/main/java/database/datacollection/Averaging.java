package database.datacollection;

import java.util.ArrayList;

public class Averaging {
    public double getFoodAverage(String zip){
        int numZips=74;
        ArrayList<FoodData> foodData= MongoStorage.getFoodData();
        for(int i=0;i<foodData.size();i++)
        {
            //0 if no schools are in this zip code
            //Psudocode for collection
           // if(foodData.get(i).getZip().equals(zip))
           //return foodData.get(i).getAggregate
        }
        return 0.0;
    }

    public double getTrafficAverage(){
        ArrayList<TrafficData> trafficData = MongoStorage.getTrafficData();
        //100 ranking if no data is found
        //Psudocode for collection
        // if(trafficData.get(i).getZip().equals(zip))
        //return trafficData.get(i).getAggregate
        return 0.0;
    }

    public double getSchoolAverage(){
        ArrayList<SchoolData> schoolData= MongoStorage.getSchoolData();
        //0 if no schools are in this zip code
        //Psudocode for collection
        // if(trafficData.get(i).getZip().equals(zip))
        //return trafficData.get(i).getAggregate

        return 0.0;
    }
}
