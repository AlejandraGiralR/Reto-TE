package co.com.tevolvers.certification.api.karate.createToken;

import com.intuit.karate.junit5.Karate;

public class CreateTokenRunner {
    @Karate.Test
    Karate createBooking() {
        return Karate.run("create_token").relativeTo(getClass());
    }
}
