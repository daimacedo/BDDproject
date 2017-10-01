package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignUpPage {

	WebDriver driver;
	
	
	@FindBy(id = "memberLoginDialogemailInputinput")
	WebElement emailField;

	@FindBy(xpath = "//div[@id='memberLoginDialogpassword']//input")
	WebElement passwordField;

	@FindBy(id="memberLoginDialogoklink")
	WebElement logInButton;
	
	
	@FindBy(id= "DrpDwnMn05linkElement")
	//@FindBy(id= "i90scv3glink")
	WebElement menuPracticePage;

	public SignUpPage(WebDriver driver)
	{
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void inserirDadosLogin(String email, String senha)
	{

		emailField.sendKeys(email);
		passwordField.sendKeys(senha);
	}
	
	public void goButton()
	{
		logInButton.click();
	}
	
	public void irParaPracticePage() throws InterruptedException
	{ 
		menuPracticePage.click();
		
	}
}
