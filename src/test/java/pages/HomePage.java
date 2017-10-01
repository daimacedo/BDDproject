package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	
WebDriver driver;
	
	@FindBy(id = "comp-iiqg1vggactionTitle" )
	WebElement linkParaLogar;
	
	@FindBy(id = "signUpDialogswitchDialogLink")
	WebElement linkSignIn;
	
	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	

	public void acessarPaginaLogin()
	{
		linkParaLogar.click();
		linkSignIn.click();
	}
	

	

}