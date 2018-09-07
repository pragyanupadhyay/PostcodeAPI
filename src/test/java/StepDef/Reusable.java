package StepDef;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class Reusable {
	public static String url;
	public static int httpStatusCode;
	public static String responseString=null;
	public String setURL(String searchText, String postCode)
	{
		
		if(searchText.equals("search"))
		{
			searchText="";
		}
		else 
		{
			searchText="/"+searchText;
		}
		url="https://api.postcodes.io/postcodes/"+postCode+searchText;
		System.out.println(url);
		return url;
	}
	public void httpGet() throws ClientProtocolException, IOException
	{
		HttpGet httpget=new HttpGet(url);
		CloseableHttpClient httpClient;
		httpClient=HttpClients.createDefault();
		CloseableHttpResponse response= httpClient.execute(httpget);
		httpStatusCode=response.getStatusLine().getStatusCode();
		System.out.println("Response status code: "+httpStatusCode );
		responseString=EntityUtils.toString(response.getEntity());
		System.out.println("Response status : "+responseString );
	}
	public int getHttpStatusCode()
	{
		return httpStatusCode;
	}
	public String getResponseJson()
	{
		return responseString;
	}
}
