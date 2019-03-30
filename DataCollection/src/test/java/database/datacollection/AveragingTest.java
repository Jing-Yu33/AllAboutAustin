package database.datacollection;

import static org.junit.Assert.*;

import org.junit.BeforeClass;
import org.junit.Test;

public class AveragingTest {
	
	private final String[] EMPTY_ZIPCODES = {"73301", "78708"}; // Zipcodes with zero scores (no data)
	private final String[] FULL_ZIPCODES = {"78703", "78758"}; // Zipcodes with all three scores > 0 (all three data present)

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		MongoStorage.setUp();
	}

	@Test
	public void testFoodEmpty() {
		for (String ezc : EMPTY_ZIPCODES)
			assertTrue(Averaging.getFoodAverage(ezc) == 0.0);
	}

	@Test
	public void testTrafficEmpty() {
		for (String ezc : EMPTY_ZIPCODES)
			assertTrue(Averaging.getTrafficAverage(ezc) == 0.0);
	}

	@Test
	public void testSchoolEmpty() {
		for (String ezc : EMPTY_ZIPCODES)
			assertTrue(Averaging.getFoodAverage(ezc) == 0.0);
	}
	
	@Test
	public void testFoodFull() {
		for (String fzc : FULL_ZIPCODES)
			assertTrue(Averaging.getFoodAverage(fzc) > 0.0);
	}

	@Test
	public void testTrafficFull() {
		for (String fzc : FULL_ZIPCODES)
			assertTrue(Averaging.getTrafficAverage(fzc) > 0.0);
	}

	@Test
	public void testSchoolFull() {
		for (String fzc : FULL_ZIPCODES)
			assertTrue(Averaging.getSchoolAverage(fzc) > 0.0);
	}

	@Test
	public void testBadZipFood() {
		String[] badZip = {"bbb", "900000", "76543210", "e", "!!!"};
		for (String bz : badZip)
			assertTrue(Averaging.getFoodAverage(bz) == 0);
	}

	@Test
	public void testBadZipTraffic() {
		String[] badZip = {"bbb", "900000", "76543210", "e", "!!!"};
		for (String bz : badZip)
			assertTrue(Averaging.getTrafficAverage(bz) == 0);
	}

	@Test
	public void testBadZipSchool() {
		String[] badZip = {"bbb", "900000", "76543210", "e", "!!!"};
		for (String bz : badZip)
			assertTrue(Averaging.getSchoolAverage(bz) == 0);
	}
}
