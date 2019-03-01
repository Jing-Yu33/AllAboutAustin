package database.datacollection;

import java.io.IOException;

/**
 * Head of the data collection program. This calls all other classes.
 */

public class DataCollectionMain {

	public static void main(String[] args) {
		demoSodaCollector();
	}

	private static void demoSodaCollector() {
		SodaCollector demo = new SodaCollector();
		try {
			demo.getNewData().printDataSet();;
		} catch (IOException e) {
			System.out.println(e.toString());
		}
	}
}
