package info.allaboutaustin.RestfulApi.models.ZipcodeComparators;

import java.util.Comparator;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public class ZipcodeFoodComparator implements Comparator<Zipcode>{

	@Override
	public int compare(Zipcode z1, Zipcode z2) {
		if(z2.getFoodScore().compareTo(z1.getFoodScore()) == 0) {
			return z2.getAverageScore().compareTo(z1.getAverageScore());
		}
		return z2.getFoodScore().compareTo(z1.getFoodScore());
	}

}
