package com.luv2code.springdemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class AppRestController {

	@RequestMapping(value = "/test", produces = "application/json")
	@CrossOrigin(origins = "*")
	public String test() {
		System.out.println("Pogodjen rest");
		return "Zdravoo";
	}
	
}
