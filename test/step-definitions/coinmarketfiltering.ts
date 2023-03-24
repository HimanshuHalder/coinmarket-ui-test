import {Given, When, Then} from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page.ts';
import AddfilterPage from '../pageobjects/addfilter.page.ts';
import {browser} from "@wdio/globals";

Given(/^I am on (.*) home page$/, async (url) => {
    await HomePage.openHomePage(url)
});

When(/^I filter displayed record by (.*)$/, async (row) => {
    await HomePage.filterRecordsByRow(row);
});

Then(/^I capture all page contents$/, async () => {
    await HomePage.printCryptoTableData();
});

Then(/^filter the algorithm by (.*)$/, async (algoname) => {
    await HomePage.filterSelection(algoname)
});

Then(/^I navigate to add filter popup by clicking add filter$/, async () => {
    await AddfilterPage.clickAddFilter();
});

Then(/^toggle on Mineable on add filter page$/, async () => {
    await AddfilterPage.toggleMineable();
});

Then(/^I select (.*) under (.*)$/, async (coins, allCryptoCurrencies) => {
    await AddfilterPage.clickAllCryptoCurrencies();
    await AddfilterPage.selectCoins()
});

Then(/^I select price and set minimum value to (.*) and maximum to (.*)$/, async (minvalue, maxvalue) => {
    await AddfilterPage.selectPrice();
    await AddfilterPage.setMinValueToPriceRange(minvalue);
    await AddfilterPage.setMaxValueToPriceRange(maxvalue);
    await browser.pause(1000);
    await AddfilterPage.clickOnApplyFilter();
    await browser.pause(1000);
    await AddfilterPage.clickOnShowResults();
});

Then(/^compare current page content with initially captured page content$/, async () => {
    var coinMap = new Map();
    for(let i=1; i <= 2;i++){
        var coinName = await $('//tbody//tr['+i+']//a[@class="cmc-link"][1]/div/div/div//p[1]').getText();
        var price = await await $('//tbody/tr['+i+']//a[@class="cmc-link"]/span').getText();
        coinMap.set(coinName, price);
    }
    console.log(coinMap);
});