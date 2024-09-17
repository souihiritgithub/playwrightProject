Feature: Validate the title of the Playwright website

  Scenario: Validate the title of the Playwright website
    Given I navigate to the Playwright homepage
    Then I expect the title to contain "Playwright"
