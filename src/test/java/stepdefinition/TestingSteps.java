package stepdefinition;

import static org.assertj.core.api.Assertions.*;

import java.util.List;

import base.SetUpTest;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
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

	@When("^User enters the following credentials$")
	public void user_enters_the_following_credentials(DataTable table) throws Throwable {
	
		List<List<String>> data = table.raw();
		System.out.println("O valor é: " + data.get(0).get(0).toString());
		System.out.println("O valor é: " + data.get(0).get(1).toString());
		
		//primeiro get eh linha segundo get eh coluna
		
		SignUpPage signPage = new SignUpPage(driver);
		signPage.inserirDadosLogin(data.get(1).get(0).toString(), data.get(1).get(1).toString());
		
		

	}


	@When("^User clicks on GO button$")
	public void user_clicks_on_GO_button() throws Throwable {
		
		SignUpPage signPage = new SignUpPage(driver);
		signPage.goButton();
	}

	@Then("^He can visit the practice page$")
	public void he_can_visit_the_practice_page() throws Throwable {
		Thread.sleep(5000);
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
