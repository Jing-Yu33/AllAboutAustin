package info.allaboutaustin.RestfulApi.models.ZipcodeComparators;

import java.util.Comparator;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public class ZipcodeEducationComparator implements Comparator<Zipcode>{

	@Override
	public int compare(Zipcode z1, Zipcode z2) {
		// TODO Auto-generated method stub
		return z2.getEducationScore().compareTo(z1.getEducationScore());
	}

}
