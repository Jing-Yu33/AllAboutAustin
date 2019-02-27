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

		Soda2Consumer consumer = Soda2Consumer.newConsumer("https://sandbox.demo.socrata.com");

		// To get a raw String of the results
		Response response;
		try {
			response = consumer.query("nominationsCopy",
			                                         HttpLowLevel.JSON_TYPE,
			                                         SoqlQuery.SELECT_ALL);
		} catch (Exception e) {
			throw new IOException(e.toString());
		}

		String payload = response.getEntity().toString();
		System.out.println(payload);
		
		return null;
	}

}
