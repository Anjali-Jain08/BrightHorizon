/* eslint-disable @typescript-eslint/no-var-requires */
import { assert } from 'chai';
const { getElement, getElements, getLocator, getElementExists } = require('../locators/getElementLocators');
const { geturl } = require('../config/environment');

//Launching application
const openUrl = (pageDescription: string): void => {
  const url = geturl(pageDescription);
  browser.url(url);
};

//Clicking on element
const click = (element: string): void => {
  const currentElement = getElement(element);
  currentElement.scrollIntoView({ block: 'center', inline: 'center' });
  browser.waitUntil(() => currentElement.isClickable(), {
    timeout: 10000,
    timeoutMsg: 'Expected text to be visible after 10s',
  });
  currentElement.click();
  console.log('Clicked on element:=> ' + element);
};

//Element not enabled
const wait = (webElement: string): void => {
  const currentElement = getElement(webElement);
  currentElement.scrollIntoView({ block: 'center', inline: 'center' });
  browser.waitUntil(() => currentElement.isDisplayed(), {
    timeout: 10000,
    timeoutMsg: 'Expected text to be visible after 10s',
  });
};

const enterTexts = (enteringText: string, webElement: string): void => {
  const currentElement = getElement(webElement);
  currentElement.scrollIntoView({ block: 'center', inline: 'center' });
  wait(webElement);
  currentElement.addValue(enteringText);
  console.log('Text:=> ' + enteringText + ' entered in field:=> ' + webElement);
};

//Verify URL contains the expected text
const verifyUrlContainsText = (expectedText: string): void => {
  const currentUrl = browser.getUrl();
  assert.include(currentUrl, expectedText, `URL does not include expected text: ${expectedText}`);
  console.log(`URL includes expected text: ${expectedText}`);
};

//Verify slider text is matching with the slider buttons
const verifyNumberOfSlidersEqualsToSliderButtons = (): void => {
  const numberOfSliderTexts = getElements('listOfSliderTexts');
  const numberOfSliderButtons = getElements('listOfSliderButtons');
  assert.equal(
    numberOfSliderTexts.length,
    numberOfSliderButtons.length,
    'Number of Slider texts is not matching with Slider buttons'
  );
  console.log(
    'No. of Slider Texts :' +
      numberOfSliderTexts.length +
      ' is matching with the no. of Slider buttons :' +
      numberOfSliderButtons.length
  );
};

//Verify 1st search result is matching with the expected text
const verifyExpectedTextIsMatching = (Weblement: string, expectedText: string): void => {
  const searchResults = getElement(Weblement);
  const firstSearchedResultText = searchResults.getText();
  assert.equal(expectedText, firstSearchedResultText, 'Searched Text is not matching with 1st searched result');
  console.log('Searched text is matching with the first searched results');
};

//Element is visible
const verifyElementIsVisible = (webElement: string): boolean => {
  const element = getElementExists(webElement);
  element.scrollIntoView({ block: 'center', inline: 'center' });
  wait(webElement);
  const isEnabled = element.isDisplayed();
  assert.equal(isEnabled, true);
  console.log('Element is visible on the screen----->' + webElement);
  return isEnabled;
};

export {
  openUrl,
  click,
  enterTexts,
  verifyUrlContainsText,
  verifyNumberOfSlidersEqualsToSliderButtons,
  verifyExpectedTextIsMatching,
  verifyElementIsVisible,
};
