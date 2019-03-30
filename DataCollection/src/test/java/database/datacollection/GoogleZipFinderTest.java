package database.datacollection;
import junit.framework.TestCase;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class  GoogleZipFinderTest extends TestCase
{
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public GoogleZipFinderTest( String testName )
    {
        super( testName );
    }

    @Test
    public void testgetZipcodeWithAddress()
    {
        assertEquals(75110, GoogleZipFinder.getZipCode("1541 Princeton Drive Corsicana, Tx"));
    }
    
    @Test
    public void testgetZipcodeWithCoordinates(){
        assertEquals(75110, GoogleZipFinder.getZipCode(32.102876, -96.489527));
    }




}

