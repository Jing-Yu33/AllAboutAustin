package info.allaboutaustin.RestfulApi.models.ZipcodeComparators;

import java.util.Comparator;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public class ZipcodeTotalScoreComparator implements Comparator<Zipcode>{

	@Override
	public int compare(Zipcode z1, Zipcode z2) {
		// TODO Auto-generated method stub
		return z2.getTotalScore().compareTo(z1.getTotalScore());
	}

}
