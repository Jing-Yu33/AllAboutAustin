package info.allaboutaustin.RestfulApi.models.ZipcodeComparators;

import java.util.Collections;

import info.allaboutaustin.RestfulApi.exception.ParameterNotValidException;

public class ZipcodesCamparatorFactory {
	
	public ZipcodesComparator createComparator(String category) {
		ZipcodesComparator zc = null;
		switch(category) {
			case "food": zc =  new ZipcodeFoodComparator();	break;
			case "traffic": zc =  new ZipcodeTrafficComparator(); break;
			case "education": zc = new ZipcodeEducationComparator(); break;
			case "average": zc = new ZipcodeAverageScoreComparator(); break;
			default: throw new ParameterNotValidException("Category should be food, traffic, eudcation, or average, please verify your input URL");
		}
		return zc;
	}
	
}
