# tests/features/homepage.feature

Feature: Homepage Title Verification

  Scenario: User navigates to homepage
    Given I navigate to the Playwright homepage
    Then I expect the title to contain "Playwright"
