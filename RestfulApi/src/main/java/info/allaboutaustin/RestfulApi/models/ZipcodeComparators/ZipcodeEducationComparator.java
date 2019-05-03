package info.allaboutaustin.RestfulApi.models.ZipcodeComparators;

import java.util.Comparator;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public class ZipcodeEducationComparator extends ZipcodesComparator{

	@Override
	public int compare(Zipcode z1, Zipcode z2) {
		if(z2.getEducationScore().compareTo(z1.getEducationScore()) == 0) {
			return z2.getAverageScore().compareTo(z1.getAverageScore());
		}
		return z2.getEducationScore().compareTo(z1.getEducationScore());
	}

}
