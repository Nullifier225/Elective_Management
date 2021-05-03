package seleniumtesting;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class seleniumtesting1 {
	


		

	    static WebDriver driver;
	    public static void main(String[] args) throws InterruptedException {
	            // TODO Auto-generated method stub
	    		System.setProperty("webdriver.gecko.driver","src/geckodriver.exe");
	           
	            WebDriver driver = new FirefoxDriver();
	    driver.get("http://localhost:3000");
	    driver.findElement(By.id ("email")).sendKeys("cb.en.u4cse18042@cb.students.amrita.edu");   
	    Thread.sleep(2000);
	    driver.findElement(By.id ("pwd")).sendKeys("login") ;
	    Thread.sleep(2000);
	    driver.findElement(By.id("Button")).submit();  
	    Thread.sleep(2000);
	    
	    driver.manage().deleteAllCookies();
	            driver.manage().window().maximize();
	            String getlink= driver.getCurrentUrl();
	            System.out.println("Page title after link click : " + driver.getCurrentUrl());
	            if(getlink.equals("http://localhost:3000/loginform")) {
	            	System.out.println("Test case 1 success");
	            }
	            else {
	            	if(driver.findElement(By.id ("data")).getText().equals("Email id or password incorrect")) {
	            		System.out.println("error in redirecting, email id or pwd incorrect");
	            	}
	            	else {
		            	System.out.println("error in redirecting");
		            	//System.e.println();
		            }
	            }
	            
	    //Thread.sleep(2000);
	    //driver.close();
	            }


}
