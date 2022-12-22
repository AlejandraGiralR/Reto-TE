#Author: alejagr.ag@gmail.com

Feature: As a user I want to create a new booking in the API

  Background:
    * url api.baseUrl
    * def headersGet = read("../../jsonBase/headers/headersGet.json")

  Scenario: get all data

    Given path path.getBooking
    And headers headersGet
    When method GET
    Then status 200


  @GetWithId
  Scenario Outline: consult by Id
    Given path path.getBooking+'/<id>'
    And headers headersGet
    When method GET
    Then status 200

    Examples:
      | id  |
      | 5   |
      | 27  |
      | 368 |



