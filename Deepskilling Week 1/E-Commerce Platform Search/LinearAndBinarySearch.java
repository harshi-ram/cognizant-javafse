public class LinearAndBinarySearch{
    public static Product linear Search(Product products[], int targetId){
        for (Product product : products){
            if (product.productId == targetId){
                return product;
            }
         return null;
        }
     }


     public static Product binarySearch(Product[] products, int targetId){
        int left = 0;
        int right = products.length;

        while (left <= right){
             int mid = (left + right) / 2;
             
             if (products[mid].getProductId() == targetId){
               return products[mid];
            }

            if (products[mid].getProductId() < targetId){
               left = mid + 1;
            }
 

             else{ 
               right = mid - 1;
            }

       }
       return null;
     

    }
}
        
