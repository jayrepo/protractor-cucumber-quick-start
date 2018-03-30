@calculate
Feature: Super Calculator

    Background: Go to home page
        Given I go to "Home" page

    @title
    Scenario: Verify Title
        Then the title should be "Super Calculator"

    @add
    Scenario: add 1 and 2
        When I add 1 and 2
        Then the result should be 3

    @add2
    Scenario Outline: add
        When I add <firstNum> and <secondNum>
        Then the result should be <result>
        Examples:
            | firstNum | secondNum | result |
            | 1        | 2         | 3      |
            | 2        | 3         | 5      |
            | 3        | 4         | 8      |