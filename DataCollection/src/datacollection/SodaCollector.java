package datacollection;

import java.io.IOException;

import javax.ws.rs.core.Response;
import com.socrata.api.*;
import com.socrata.model.soql.SoqlQuery;

/**
 * Collects SODA data, used for Austin Government sources.
 *
 */

public class SodaCollector implements Collector {

	@Override
	public DataSet getNewData() throws IOException {

		Soda2Consumer consumer = Soda2Consumer.newConsumer("https://data.austintexas.gov/");
				//From javadoc:
			    /**
			     * Creates a new Soda2Consumer with the passed in credentials associated with it.  All requests
			     * will contain these credentials.
			     *
			     * @param url the base URL for the SODA2 domain to access.
			     * @param userName user name to log in as
			     * @param password password to log in with
			     * @param token the App Token to use for authorization and usage tracking.  If this is {@code null}, no value will be sent.
			     *
			     * @return the new Soda2Consumer that has been fully configured.
			     */

		// To get a raw String of the results
		Response response;
		try {
			response = consumer.query("vw6m-5i7b", HttpLowLevel.JSON_TYPE, SoqlQuery.SELECT_ALL);
		} catch (Exception e) {
			throw new IOException(e.toString());
		}

		String payload = response.readEntity(String.class);
		System.out.println(payload);
		
		return null;
	}

}
