package database.datacollection;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;


@Entity("Zip_Data")
@Indexes(
        @Index(value = "zipcode", fields = @Field("zipcode"))
)
public class ZipData {
    @Id
    private ObjectId id;
    private String zipcode;
    private Double AverageScore;
    private Double foodScore;
    private Double educationScore;
    private Double trafficScore;

    // Required
    private ZipData() {};

    public ZipData(String zipcode, Double AverageScore, Double educationScore, Double foodScore, Double trafficScore) {
        this.zipcode = zipcode;
        this.AverageScore = AverageScore;
        this.educationScore = educationScore;
        this.foodScore = foodScore;
        this.trafficScore = trafficScore;
    }
}

