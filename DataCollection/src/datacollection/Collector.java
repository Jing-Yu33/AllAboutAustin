package datacollection;
import java.io.IOException;

/**
 * Describes the generic form of a data collector class
 */

public interface Collector {
	public DataSet getNewData() throws IOException;
}
