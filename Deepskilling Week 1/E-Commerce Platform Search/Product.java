public class Product{
    private int productid; //private for encapsulation
    private String productName;
    private String category;

    //constructor for parameters to input when called
    public Product(int productId, String productName, String category){
        this.productId = productId;
        this.productName = productName;
        this.category = category; 

    }

   //accessing private attributes
    public int getProductId(){ 
        return productId;
    }

    public String getProductName() {
        return productName;
    }
  
    public String getCategory() {
        return category;
    }

}
