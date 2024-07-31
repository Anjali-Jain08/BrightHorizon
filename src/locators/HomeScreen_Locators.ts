const selectorsMap = {
    'rejectCookiesButton': '//button[@id="onetrust-reject-all-handler"]',
    'editAssistLearnMoreButton': '(//a[@class="button home_lazy_edassist"])[1]',
    'listOfSliderTexts': '//div[contains(@id, "slick-slide0")]',
    'listOfSliderButtons': '//ul[@class="slick-dots"]//li/button',
    'searchIcon': '(//span[contains(@class,"icon-search bhc-icon-search-rounded")])[4]',
    'searchField': '//nav[@id="subnav-search-desktop-top"]//div[@class="row"]',
    'searchFieldInput': '(//input[@id="search-field"])[2]',
    'searchButton': '(//input[@id="search-field"]/following-sibling::button)[2]',
    'firstSearchedResult': '//div[@class="results container"]//child::a[1]//h3',   
};
export default selectorsMap;
