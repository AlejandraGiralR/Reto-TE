
function fn(){
        var connectTimeout = karate.properties['connecTimeout'] || 1500
        karate.configure('connectTimeout',connectTimeout);
        karate.configure('readTimeout', connectTimeout)
        karate.configure('ssl',true);
        return {
                api:{
                     baseUrl: "https://restful-booker.herokuapp.com"
                },
                path: {
                     createBooking: "/booking",
                     getBooking: "/booking",
                     updateBooking: "/booking",
                     createToken: "/auth"
                }
        }
}