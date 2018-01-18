package tests;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome = true, 
		features = "src/test/java/feature", 
		glue = { "stepdefinition" }, 
		plugin = {"pretty", "json:src/test/java/reports/report.json" })

public class RunTest {
	
}
