package info.allaboutaustin.RestfulApi.models.ZipcodeComparators;

import java.util.Comparator;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public abstract class ZipcodesComparator implements Comparator<Zipcode>{
	abstract public  int compare(Zipcode z1, Zipcode z2);
}
