public class SingletonTest {
    public static void main(String[] args) {
        Logger logger1  = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First message printed");
        logger2.log("Second message printed");

        if (logger1 == logger2) { //should be expected
            System.out.println("Both logger1 and logger2 are the same instance.");
        } else {
            System.out.println("logger1 and logger2 are different instances.");
        }
    }
}
