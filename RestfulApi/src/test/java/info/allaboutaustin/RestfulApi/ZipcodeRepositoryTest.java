package info.allaboutaustin.RestfulApi;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import info.allaboutaustin.RestfulApi.models.Zipcode;
import info.allaboutaustin.RestfulApi.repositories.ZipcodesRepository;

/*
 * Testing for Custom Query Methods in ZipcodesRepository.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class ZipcodeRepositoryTest {

	@Autowired
	ZipcodesRepository repo;
	
	@Test
	public void testFindByHospitals() {
		List<Zipcode> list = repo.findByNumOfHospitals(0);
		for(Zipcode zc: list) {
			assertTrue(zc.getNumOfHospitals() > 0);
		}
	}
	
	@Test
	public void testFindByCinemas() {
		List<Zipcode> list = repo.findByNumOfCinemas(0);
		for(Zipcode zc: list) {
			assertTrue(zc.getNumOfCinemas() > 0);
		}
	}
	
	@Test
	public void testFindByCategoryScoreGreaterThanQuery() {
		int food = 3;
		int traffic = 1;
		int education = 1;
		
		List<Zipcode> list = repo.findByCategoryScoreGreaterThanQuery(food, traffic, education);
		for(Zipcode zc: list) {
			assertTrue(zc.getFoodScore() > food);
			assertTrue(zc.getTrafficScore() > traffic);
			assertTrue(zc.getEducationScore() > education);
		}
	}
}
