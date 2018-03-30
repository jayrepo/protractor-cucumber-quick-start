@title
Feature: Running Cucumber with Protractor

  Scenario: Verify Title
    Given I go to "Home" page
    Then the title should be "Super Calculator"