import {range} from 'd3-array';
import {scaleQuantile} from 'd3-scale';

export function updatePercentiles(featureCollection, category) {
  var accessor = null;
  switch(category){
    case "food": 
      accessor = f => f.properties.foodScore; break;
    case "education": 
      accessor = f => f.properties.educationScore; break;
    case "traffic":
      accessor = f => f.properties.trafficScore; break;
    default: ;
  }
  const {features} = featureCollection;
  const scale = scaleQuantile().domain(features.map(accessor)).range(range(9));
  features.forEach(f => {
    const value = accessor(f);
    f.properties.value = value;
    f.properties.percentile = scale(value);
  });
}
