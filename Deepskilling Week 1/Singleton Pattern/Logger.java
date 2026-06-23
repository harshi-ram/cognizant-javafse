public class Logger {
    private static Logger instance; //only one instance of the class
    //instance is NOT created here, only a null pointer, will be checked later by getInstance()

    private Logger(){
        
        // making this private so the class cannot be instantiated from outside
        //prevents code calling new Logger() outside here
    }

    public static Logger getInstance(){//call the instance of the class
        if(instance == null){
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message){
        System.out.println(message);
    }
}
