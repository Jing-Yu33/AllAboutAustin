package info.allaboutaustin.RestfulApi.models.ZipcodeComparators;

import java.util.Comparator;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public class ZipcodeTotalScoreComparator implements Comparator<Zipcode>{

	@Override
	public int compare(Zipcode z1, Zipcode z2) {
		if(z2.getTotalScore().compareTo(z1.getTotalScore()) == 0) {
			return z2.getAverageScore().compareTo(z1.getAverageScore());
		}
		return z2.getTotalScore().compareTo(z1.getTotalScore());
	}

}
