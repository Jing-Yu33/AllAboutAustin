package database.datacollection;

import static org.junit.Assert.*;

import java.io.IOException;

import org.junit.Test;

public class ZomatoTest {

	@Test
	public void testNewData() {
		ZomatoCollector zc = new ZomatoCollector();
		DataSet ds = null;
		try {
			ds = zc.getNewData();
		} catch (IOException e) {
			fail("IO Error");
		}
		assertFalse(ds == null);
		for (Integer key : ds.zipData.keySet()) {
			assertFalse(ds.zipData.get(key) == null);
		}
	}

	@Test
	public void testNewDataOffset() {
		ZomatoCollector zc = new ZomatoCollector();
		DataSet ds = null;
		try {
			ds = zc.getNewData(25);
		} catch (IOException e) {
			fail("IO Error");
		}
		assertFalse(ds == null);
		for (Integer key : ds.zipData.keySet()) {
			assertFalse(ds.zipData.get(key) == null);
		}
	}
	
}
