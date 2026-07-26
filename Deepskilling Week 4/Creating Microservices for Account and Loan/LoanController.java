package com.cognizant.account.controller;


import java.util.Map;
import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {
	
	@GetMapping("/loans/{number}")
	public Map<String, Object> getLoan(@PathVariable String number){
		
		Map<String, Object> account = new HashMap();
		
		account.put("number", number);
		account.put("type", "car");
		account.put("loan", 400000);
		account.put("emi", 3258);
		account.put("tenure", 18);
		
		return account;
	}
	
	

}

