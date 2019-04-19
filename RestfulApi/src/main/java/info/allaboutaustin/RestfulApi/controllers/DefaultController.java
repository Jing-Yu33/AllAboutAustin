package info.allaboutaustin.RestfulApi.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class DefaultController {
	
	@RequestMapping("/")
	@ResponseBody
	public String index() {
		return ("<h1>Welcome to All About Austin API</h1>"+
				"<p><a href='http://allaboutaustin.info' target=_blank>Website: All About Austin</a></p>"+
				"<p><a href='https://documenter.getpostman.com/view/6614125/S1ETQG2B' target=_blank>API Documentation</a></p>");
	}
}
