package info.allaboutaustin.RestfulApi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ZipcodeNotFoundException extends RuntimeException {

	public ZipcodeNotFoundException(String message) {
		super(message);
	}
	
}
