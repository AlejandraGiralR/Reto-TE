package co.com.tevolvers.certification.api.karate.updateBooking;

import com.intuit.karate.junit5.Karate;

public class UpdateRunner {
    @Karate.Test
    Karate updateBooking() {
        return Karate.run("update").relativeTo(getClass());
    }
}
