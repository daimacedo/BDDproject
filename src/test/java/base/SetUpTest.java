package base;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class SetUpTest {
	

	protected static WebDriver driver;
	protected static String baseUrl;
	
	@BeforeClass
	public static void SetUp(String url) {
		
		System.setProperty("webdriver.gecko.driver", "/home/daiane.macedo/workspace2/cucumber/resources/seleniumDrivers/geckodriver");
		
		//System.setProperty("webdriver.gecko.driver", "/home/daiane.macedo/Desktop/phaton/phantomjs-2.1.1-linux-x86_64/bin/phantomjs");
		
		
		driver = new FirefoxDriver();
		baseUrl = url;
		// driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(url);

		
	}
	
	@AfterClass
	public static void TearDown()
	{
		driver.quit();
	}

}