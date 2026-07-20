package com.cognizant.spring.learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
@SpringBootApplication
public class Application {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {

        LOGGER.info("Application Starting...");

        SpringApplication.run(Application.class, args);

        displayCountry();

        LOGGER.info("Application Finished");

        LOGGER.info("Application Started Successfully");
    }
    
 
    private static void displayCountry() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country =
                context.getBean("country", Country.class);

        LOGGER.debug("Country : {}", country);
    }
}
