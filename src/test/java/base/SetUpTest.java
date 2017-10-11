package base;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SetUpTest {

	private final WebDriver driver;
	private String baseUrl;

	public SetUpTest() {
		System.setProperty("webdriver.gecko.driver","/home/daiane.macedo/workspace2/cucumber/resources/seleniumDrivers/geckodriver");
		driver = new FirefoxDriver();
	}

	@BeforeClass
	public void SetUp(String url) {
		
		// System.setProperty("webdriver.gecko.driver",
		// "/home/daiane.macedo/Desktop/phaton/phantomjs-2.1.1-linux-x86_64/bin/phantomjs");

		baseUrl = url;
		// driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(url);

	}

	@AfterClass
	public void TearDown() {
		driver.quit();
	}

	public WebDriver getDriver() {
		return driver;
	}
}