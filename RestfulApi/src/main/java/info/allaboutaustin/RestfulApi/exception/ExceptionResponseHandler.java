package info.allaboutaustin.RestfulApi.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/*
 * 	Centralized Exception Handling across all @RequestMapping methods	
 */

@ControllerAdvice
@RestController
public class ExceptionResponseHandler extends ResponseEntityExceptionHandler{

	@ExceptionHandler(ZipcodeNotFoundException.class)
	public ResponseEntity<Object> handleZipcodeNotFoundException(
			Exception ex, WebRequest request) {
		ExceptionResponse ep = new ExceptionResponse(new Date(), ex.getMessage(), request.getDescription(false)); 
		return new ResponseEntity(ep, HttpStatus.NOT_FOUND);
	}
}
