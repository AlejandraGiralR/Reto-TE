package co.com.tevolvers.certification.api.karate.createBooking;

import com.intuit.karate.junit5.Karate;

public class CreateRunner {
    @Karate.Test
    Karate createBooking() {
        return Karate.run("create").relativeTo(getClass());
    }
}
