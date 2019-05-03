package info.allaboutaustin.RestfulApi.models.ZipcodeComparators;

import java.util.Comparator;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public class ZipcodeAverageScoreComparator extends ZipcodesComparator{

	@Override
	public int compare(Zipcode z1, Zipcode z2) {
		return z2.getAverageScore().compareTo(z1.getAverageScore());
	}
	
}
