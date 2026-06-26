package testing1;
import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class CalculatorTest2 {
	
	private Calculator calc; //declaration first, because whole class must be able to access calc
	
	//methods public, attributes private is best
	
	@Before
	public void SetUp() {
		calc = new Calculator(); //object inititialized
	}
	
	@Test
	public void CalcTest() {
		assertTrue(calc.positive(1));
	}
	
	@After
	public void TearDown() {
		System.out.println("Tearing Down");
	}
	

}
