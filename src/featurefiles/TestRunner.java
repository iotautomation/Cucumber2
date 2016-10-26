package featurefiles;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	 
	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "Feature"
			,glue={"step"}
			,format={"html:output"}
			)
	 
	public class TestRunner {
	 
	}


