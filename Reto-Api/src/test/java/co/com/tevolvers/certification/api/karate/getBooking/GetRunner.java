package co.com.tevolvers.certification.api.karate.getBooking;

import com.intuit.karate.junit5.Karate;

public class GetRunner {
    @Karate.Test
    Karate getBooking() {
        return Karate.run("get").relativeTo(getClass());
    }
}
