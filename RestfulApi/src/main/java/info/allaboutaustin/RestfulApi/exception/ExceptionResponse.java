package info.allaboutaustin.RestfulApi.exception;

import java.util.Date;

import lombok.Getter;

@Getter
public class ExceptionResponse {
	private Date timestamp;
	private String message;
	private String detail;
	
	public ExceptionResponse(Date date, String message, String detail) {
		super();
		this.timestamp = date;
		this.message = message;
		this.detail = detail;
	}
}
