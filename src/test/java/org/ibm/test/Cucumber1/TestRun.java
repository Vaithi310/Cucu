package org.ibm.test.Cucumber1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)


@CucumberOptions(features = { "src\\test\\java\\org\\ibm\\test\\Cucumber1" }, strict = true, dryRun = false, glue = {
		"org.ibm.test.Cucumber1" }, monochrome = true, plugin = "html:target")

public class TestRun {
	
	

}
