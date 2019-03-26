package database.datacollection;

import java.util.ArrayList;

public class Averaging {
    public double getFoodAverage(){
        ArrayList<FoodData> foodData= MongoStorage.getFoodData();
        return 0.0;
    }

    public double getTrafficAverage(){
        ArrayList<FoodData> trafficData = MongoStorage.getTrafficData();
        return 0.0;
    }

    public double getSchoolAverage(){
        ArrayList<FoodData> schoolData= MongoStorage.getSchoolData();
        return 0.0;
    }
}
