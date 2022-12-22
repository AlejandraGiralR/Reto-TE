#Author: alejagr.ag@gmail.com

Feature: As a user I want to update a booking in the API

  Background:
    * url api.baseUrl
    * path path.updateBooking+'/600'

    * def headersUpdate = read("../../jsonBase/headers/headersUpdate.json")
    * def bodyUpdate = read("../../jsonBase/body/bodyUpdate.json")

    * def firstname = firstname
    * def lastname = lastname
    * def totalprice = totalprice
    * def depositpaid = depositpaid
    * def checkin = checkin
    * def checkout = checkout
    * def additionalneeds = additionalneeds


  Scenario Outline: update a booking

    * call read("../../karate/createToken/create_token.feature@createToken")
    * set headersUpdate.Cookie = 'token='+rsCreateToken.token

    Given headers headersUpdate
    And request bodyUpdate
    When method PUT
    Then status 200
    Examples:
      | firstname | lastname | totalprice | depositpaid | checkin    | checkout   | additionalneeds |
      | Manuela   | Gomez    | 1111       | true        | 2018-01-01 | 2019-01-01 | Breakfast       |