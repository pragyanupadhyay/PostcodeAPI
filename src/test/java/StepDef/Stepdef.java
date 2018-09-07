package StepDef;

import static org.testng.Assert.assertEquals;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.PendingException;



public class Stepdef {
	@Given("^An input request for \"([^\"]*)\" with postcode \"([^\"]*)\"$")
	public void an_input_request(String searchText, String postCode)
	{
		System.out.println("******************************************************");
		System.out.println("Inside method an_input_request");
		Reusable r=new Reusable();
		r.setURL(searchText, postCode);
	}
	@When("^The API is called$")
	public void The_API_is_called() throws ClientProtocolException, IOException
	{
		System.out.println("Inside method The_API_is_called");
		Reusable r=new Reusable();
		r.httpGet();
	}
	@Then("^response status code is \"([^\"]*)\"$")
	public void Response_status_code_is(String statusCode)
	{
		System.out.println("Inside method response_status_code");
		Reusable r=new Reusable();
		switch(statusCode)
		{
		case "200": assertEquals(Integer.parseInt(statusCode),r.getHttpStatusCode());
		break;
		case "400": assertEquals(Integer.parseInt(statusCode),r.getHttpStatusCode());
		break;
		default: System.out.println("unexpected httpcode"+ statusCode);
		}
	}
	@And("^response has \"([^\"]*)\"$")
	public void Response_has(String result)
	{
		System.out.println("Inside method Response_has");
		Reusable r=new Reusable();
		if(r.getResponseJson().contains(result))
		{
			System.out.println("Actual response matches the expected");
		}
		else 
			System.out.println("Unexpected result recieved");
	}
	
}


