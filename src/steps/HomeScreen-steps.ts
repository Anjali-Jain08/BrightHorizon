import { Given, When, Then } from '@cucumber/cucumber';
import * as utils from '../utilities/homeUtility';

Given(/^Verify the "(.*)" is launching in the browser$/, (webpage: string) => {
  utils.openUrl(webpage);
});

Then(/^Verify the current URL contains "(.*)"$/, (Webelement: string) => {
  utils.verifyUrlContainsText(Webelement);
});

Then(/^Verify the number of slider text is matching with the number of slider buttons$/, () => {
  utils.verifyNumberOfSlidersEqualsToSliderButtons();
});

Then(/^Verify the "(.*)" is visible on the screen$/, (WebElement: string) => {
  utils.verifyElementIsVisible(WebElement);
});

Then(/^I click on "(.*)"$/, (Webelement: string) => {
  utils.click(Webelement);
});

Then(/^I enter "(.*)" into "(.*)" input field$/, (enterText: string, webElement: string) => {
  utils.enterTexts(enterText, webElement);
});

Then(/^Verify the "(.*)" is matching with the searched text "(.*)"$/, (webElement: string, searchedText: string) => {
  utils.verifyExpectedTextIsMatching(webElement, searchedText);
});
