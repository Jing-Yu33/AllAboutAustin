package database.datacollection;

import static org.junit.Assert.*;
import java.io.IOException;
import java.util.HashMap;
import org.junit.Test;

public class SodaTest {

	@Test
	public void testNewData() {
		SodaCollector sc = new SodaCollector();
		DataSet ds = null;
		try {
			ds = sc.getNewData();
		} catch (IOException e) {
			fail("IO Error");
		}
		assertFalse(ds == null);
		for (Integer zipcode : ds.zipData.keySet()) {
			HashMap<String, Double> zipcodeData = ds.zipData.get(zipcode);
			assertFalse(zipcodeData == null);
			for (String dataType : zipcodeData.keySet()) {
				assertFalse(zipcodeData.get(dataType) == null);
			}
		}
	}
	
}
