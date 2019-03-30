package database.datacollection;

import static org.junit.Assert.*;
import java.util.HashMap;
import org.junit.Test;

public class DataSetTest {
	
	private final Integer TEST_ZIPCODE = 78712;

	@Test
	public void testDataSet() {
		DataSet uut = new DataSet();
		assertFalse(uut == null);
	}

	@Test
	public void testAddZipcodeData() {
		DataSet uut = new DataSet();
		assertFalse(uut.zipData.keySet().contains(TEST_ZIPCODE));
		uut.addZipcodeData(TEST_ZIPCODE, new HashMap<String, Double>());
		assertTrue(uut.zipData.keySet().contains(TEST_ZIPCODE));
	}

	@Test
	public void testDeleteZipcodeData() {
		DataSet uut = new DataSet();
		uut.addZipcodeData(TEST_ZIPCODE, new HashMap<String, Double>());
		assertTrue(uut.zipData.keySet().contains(TEST_ZIPCODE));
		uut.deleteZipcodeData(TEST_ZIPCODE);
		assertFalse(uut.zipData.keySet().contains(TEST_ZIPCODE));
	}

}
