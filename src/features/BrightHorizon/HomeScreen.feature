# Feature: Run tests on Bright horizons application
#     Background: Pre-requisites

#         Given Verify the "urlBrightHorizons" is launching in the browser

#     Scenario: Test-1: Verify comments
#         When I click on "rejectCookiesButton"
#         When I click on "editAssistLearnMoreButton"
#         Then Verify the current URL contains "edassist-solutions"
#         Then Verify the number of slider text is matching with the number of slider buttons

#     Scenario: Test-2: Verify search functionality
#         When I click on "searchIcon"
#         Then Verify the "searchField" is visible on the screen
#         When I enter "Employee Education in 2018: Strategies to Watch" into "searchFieldInput" input field
#         When I click on "searchButton"
#         Then Verify the "firstSearchedResult" is matching with the searched text "Employee Education in 2018: Strategies to Watch"




