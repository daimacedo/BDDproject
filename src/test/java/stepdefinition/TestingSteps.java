package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import static org.assertj.core.api.Assertions.*;
import base.SetUpTest;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.HomePage;
import pages.PracticePage;
import pages.SignUpPage;

public class TestingSteps extends SetUpTest {


	
	

	@Given("^User is on home page$")
	public void user_is_on_home_page() throws Throwable {
		
		SetUp("http://www.letskodeit.com/");
		HomePage homePage = new HomePage(driver);
		homePage.acessarPaginaLogin();

	}

	@When("^User enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
		
		SignUpPage signPage = new SignUpPage(driver);
		signPage.inserirDadosLogin("test@email.com", "abcabc");
	}

	@When("^User clicks on GO button$")
	public void user_clicks_on_GO_button() throws Throwable {
		Thread.sleep(3000);
		SignUpPage signPage = new SignUpPage(driver);
		signPage.goButton();
	}

	@Then("^He can visit the practice page$")
	public void he_can_visit_the_practice_page() throws Throwable {
		SignUpPage signPage = new SignUpPage(driver);
		signPage.irParaPracticePage();
		
	}

	@Then("^A message is displayed$")
	public void a_message_is_displayed() throws Throwable {
		
		PracticePage practicePage = new PracticePage(driver);
		System.out.println(practicePage.getPageTitle());
		//Assert.assertTrue(practicePage.getPageTitle().contains("Practice Page"));
		assertThat(practicePage.getPageTitle()).endsWith("Practice Page");
		
		System.out.println("Login Successful");
		TearDown();
	}

}
