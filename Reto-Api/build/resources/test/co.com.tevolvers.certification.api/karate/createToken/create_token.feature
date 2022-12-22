#Author: alejagr.ag@gmail.com

Feature: As a user I want to create a token for update a booking

  Background:
    * url api.baseUrl
    * path path.createToken

    * def headersCreateToken = read("../../jsonBase/headers/headerCreateToken.json")
    * def bodyCreateToken = read("../../jsonBase/body/bodyCreateToken.json")
    * def rsCreateToken = read("../../jsonBase/response/rsCreateToken.json")

    @createToken
  Scenario: create token and update a booking

    Given headers headersCreateToken
    And request bodyCreateToken
    When method POST
    * set rsCreateToken.token = response.token
    * print rsCreateToken.token