package database.datacollection;

import java.io.IOException;

/**
 * Head of the data collection program. This calls all other classes.
 */

public class DataCollectionMain {

	public static void main(String[] args) {
		//demoSodaCollector();
		//demoZomatoCollector();
		demoSchoolCollector();
	}

	private static void demoSodaCollector() {
		SodaCollector demo = new SodaCollector();
		try {
			demo.getNewData().printDataSet();
		} catch (IOException e) {
			System.out.println(e.toString());
		}
	}
	
	private static void demoZomatoCollector() {
		ZomatoCollector demo = new ZomatoCollector();
		try {
			demo.getNewData().printDataSet();
		} catch (IOException e) {
			System.out.println(e.toString());
		}
	}

	private static void demoSchoolCollector() {
		SchoolCollector demo = new SchoolCollector();
		try {
			demo.getNewData().printDataSet();
		} catch (IOException e) {
			System.out.println(e.toString());
		}
	}
}
