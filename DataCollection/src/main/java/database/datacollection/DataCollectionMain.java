package database.datacollection;
import java.io.IOException;
/* // Servlet version of this class
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
*/


/**
 * Head of the data collection program. This calls all other classes.
 */

//public class DataCollectionMain extends HttpServlet { //Servlet version of this class
public class DataCollectionMain {
	
	private static MongoStorage ms;

	public static void main(String[] args) throws IOException {
		ms = MongoStorage.getInstance();
		//demoSodaCollector();
		//demoZomatoCollector();
		//demoSchoolCollector();
		//demoSensorDataCollector();
		ms.saveCombinedZipcodeData();
	}
	
	/* // Servlet version of this class
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		MongoStorage.setUp();
		demoSodaCollector();
		demoZomatoCollector();
		demoSchoolCollector();
		demoSensorDataCollector();
		MongoStorage.saveCombinedZipcodeData();
    }
    */

	private static void demoSodaCollector() {
		SodaCollector demo = new SodaCollector();
		try {
			DataSet ds = demo.getNewData();
			ds.printDataSet();
			ms.saveData(ds, MongoStorage.DataTypes.TRAFFIC_RAW_DATA);
		} catch (IOException e) {
			System.out.println(e.toString());
		}
	}
	
	private static void demoZomatoCollector() {
		ZomatoCollector demo = new ZomatoCollector();
		try {
			DataSet ds = demo.getNewData(0);
			ds.printDataSet();
			ms.saveData(ds, MongoStorage.DataTypes.FOOD_RAW_DATA);
		} catch (IOException e) {
			System.out.println(e.toString());
		}
	}

	private static void demoSchoolCollector() {
		SchoolCollector demo = new SchoolCollector();
		try {
			DataSet ds = demo.getNewData();
			ds.printDataSet();
			ms.saveData(ds, MongoStorage.DataTypes.EDUCATION_RAW_DATA);
		} catch (IOException e) {
			System.out.println(e.toString());
		}
	}
	
	private static void demoSensorDataCollector() {
		SodaCollector demo = new SodaCollector();
		try {
			DataSet ds = demo.getSensorInfoData();
			ds.printDataSet();
			ms.saveData(ds, MongoStorage.DataTypes.TRAFFIC_SENSOR_DATA);
		} catch (IOException e) {
			System.out.println(e.toString());
		}
	}
}
