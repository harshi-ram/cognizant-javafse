package com.cognizant.spring.learn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cognizant.spring.learn.controller.Country;
@RestController
public class CountryController {
	
	@RequestMapping("/country")
	public Country getCountryIndia() {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = (Country) context.getBean("country");
		
		return country;
		
		
	}

}
