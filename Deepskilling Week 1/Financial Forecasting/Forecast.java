public class Forecast{
     public static float futureValue(float principal, float rate, int years){
        
        if (years == 0){
            return principal;
        }


        return futureValue(principal, rate, years - 1) * (1 + (rate/100))
 
     }
}
 
