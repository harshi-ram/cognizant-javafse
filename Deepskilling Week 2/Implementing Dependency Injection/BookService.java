package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
	
	private BookRepository bookRepository;
	
	//connect service with bookrepository object
	public void setBookRepository(BookRepository bookRepository) {
		this.bookRepository = bookRepository; //associated with bookservice now
	}
	
	public void logBookStorage() {
		bookRepository.saveDB();
	}
	
	

}
