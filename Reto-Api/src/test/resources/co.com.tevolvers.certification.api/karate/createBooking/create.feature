#Author: alejagr.ag@gmail.com

Feature: As a user I want to create a new booking in the API

  Background:
    * url api.baseUrl
    * path path.createBooking

    * def firstname = firstname
    * def lastname = lastname
    * def totalprice = totalprice
    * def depositpaid = depositpaid
    * def checkin = checkin
    * def checkout = checkout
    * def additionalneeds = additionalneeds

    * def headersCreate = read("../../jsonBase/headers/headersCreate.json")
    * def bodyCreate = read("../../jsonBase/body/bodyCreate.json")

  @sucessfullScenario
  Scenario Outline: create users

    Given headers headersCreate
    And request bodyCreate
    When method POST
    Then status 200

    * print response

    Examples:
      | firstname | lastname | totalprice | depositpaid | checkin    | checkout   | additionalneeds |
      | Jim       | Brown    | 111        | true        | 2018-01-01 | 2019-01-01 | Breakfast       |
      | Ramiro    | Valencia | 5985       | true        | 2018-01-01 | 2019-01-01 | lunch           |

  @unsuccessfulScenarios
  Scenario Outline:  Send incorrect parameters to create a booking
    And headers headersCreate
    And request bodyCreate
    When method POST
    Then status 500
    And match response == errorMessage

    Examples:
      | firstname | lastname | totalprice | depositpaid | checkin    | checkout   | additionalneeds | errorMessage          |
      |           | Brown    | 111        | true        | 2018-01-01 | 2019-01-01 | Breakfast       | Internal Server Error |
      | Jim       |          | 111        | true        | 2018-01-01 | 2019-01-01 | Breakfast       | Internal Server Error |
      | Jim       | Brown    | 111        | true       |            | 2019-01-01 | Breakfast       | Internal Server Error |

    #      | Jim       | Brown    | "111"      | true        | 2018-01-01 | 2019-01-01 | Breakfast       |
    #      | Jim       | Brown    | 1j11       | true        | 2018-01-01 | 2019-01-01 | Breakfast       |
    #      | Jim       | Brown    | 111        | false       | 2018-01-01 | 2019-01-01 | Breakfast       |


