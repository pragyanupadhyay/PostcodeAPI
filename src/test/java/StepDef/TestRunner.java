package StepDef;
import org.junit.runner.RunWith;

import cucumber.api.java.it.Date;
import cucumber.api.junit.Cucumber;
// runner class

@RunWith(Cucumber.class)
@Cucumber.Options(format={"html:output"}, features= "src/test/java/FeatureFiles/AddressValidation.feature", tags= {"@TestUKPostCode"})

public class TestRunner {
	

}
