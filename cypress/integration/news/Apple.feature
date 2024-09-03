Feature: The Apple

  I want to open Apple page

  Scenario: Opening a Apple network page
    Given Go to Apple page
    Then I see "Apple" in the title

  Scenario: Different kind of opening
    Given I kinda open Apple page
    Then Do Basic Assertions in Apple Page
