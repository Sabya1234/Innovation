package StepDefinition;		

import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;		
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;		

import cucumber.api.java.en.Given;		
import cucumber.api.java.en.Then;		
import cucumber.api.java.en.When;		

public class Step {				

    WebDriver driver;			
    		
    @Given("^Open the Chrome and Launch Application$")					
    public void open_the_Chrome_and_launch_the_application() throws Throwable							
    {		
       System.setProperty("webdriver.chrome.driver","C://downloads//chromedriver.exe");					
       driver=new ChromeDriver();				
       driver.manage().window().maximize();	
       driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
       driver.navigate().to("https://pft-storefront.diy.com");
      try
       {
    	   
        	   driver.findElement(By.xpath(XpathDiy.acceptCookies)).click();
           
       }
       
       catch(Exception ex)
       {
    	   System.out.println("Exception:::"+ex.getMessage());
       }
    }		

    @When("^Enter UserName\"(.*)\" and Password\"(.*)\"$")			
    public void enter_the_Username_and_Password(String diyusername,String diypassword) throws Throwable 							
    {
    	driver.findElement(By.xpath(XpathDiy.signInLink)).click();
       driver.findElement(By.xpath(XpathDiy.emailAddressinput)).sendKeys(diyusername);				
       driver.findElement(By.xpath(XpathDiy.password)).sendKeys(diypassword);
       driver.findElement(By.xpath(XpathDiy.signInbutton)).click();
       
    }		

    @Then("^I verify the \"(.*)\"$")					
    public void	Reset_the_credential(String message) throws Throwable 							
    {		
       driver.findElement(By.xpath(XpathDiy.welcomeMessage)).getText().contains(message);
       driver.quit();
    }		
}		