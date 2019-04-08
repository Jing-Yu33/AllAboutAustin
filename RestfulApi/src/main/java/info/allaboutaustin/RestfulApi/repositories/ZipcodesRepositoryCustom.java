package info.allaboutaustin.RestfulApi.repositories;

import java.util.List;

import info.allaboutaustin.RestfulApi.models.Zipcode;

public interface ZipcodesRepositoryCustom {
	List<Zipcode> query(DynamicQuery dynamicQuery);
}
