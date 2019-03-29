package database.datacollection;
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

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

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( GoogleZipFinder.class );
    }

    /**
     * Rigourous Test :-)
     */
    public void testgetZipcode1()
    {
        assertEquals(75110, GoogleZipFinder.getZipCode("1541 Princeton Drive Corsicana, Tx"));
    }

}

