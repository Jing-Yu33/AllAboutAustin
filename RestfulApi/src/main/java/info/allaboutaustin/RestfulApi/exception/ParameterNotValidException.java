package info.allaboutaustin.RestfulApi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ParameterNotValidException extends RuntimeException {
	
	public ParameterNotValidException(String message) {
		super(message);
	}
	
}
