import {Given, When, Then} from '@wdio/cucumber-framework';
import {browser} from "@wdio/globals";

import HomePage from '../pageobjects/home.page.ts';
import AddfilterPage from '../pageobjects/addfilter.page.ts';
import CommonUtil from "../utilities/common-util.ts";


var listedCoinsBefore;
var listedCoinsAfterFilter;

Given(/^I am on (.*) home page$/, async (url) => {
    await HomePage.openHomePage(url)
});

When(/^I filter displayed record by (.*)$/, async (row) => {
    await HomePage.filterRecordsByRow(row);
    await HomePage.numberOfPaginationTab();
});

Then(/^I capture all page contents$/, async () => {
    listedCoinsBefore = await HomePage.printCryptoTableData();
    console.log(listedCoinsBefore);
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
    browser.pause(500);
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
    listedCoinsAfterFilter = new Map();
    for(let i=1; i <= 2;i++){  //This is temporary - need to get the table cound and pass in this loop
        var coinName = await $('//tbody//tr['+i+']//a[@class="cmc-link"][1]/div/div/div//p[1]').getText();
        var price = await await $('//tbody/tr['+i+']//a[@class="cmc-link"]/span').getText();
        listedCoinsAfterFilter.set(coinName, price);
    }
    console.log("Total number of coin listed after applying filter => ");
    console.log(listedCoinsAfterFilter);
    await HomePage.numberOfPaginationTab();
    console.log("Total number of coin listed after applying filter => " + listedCoinsAfterFilter.size);
    console.assert(listedCoinsAfterFilter < listedCoinsBefore, " Coin listing is incorrect" );
    console.assert(!CommonUtil.areEqual(listedCoinsBefore, listedCoinsAfterFilter), "Data comparison not successful");
    //Data comparison could be easier if we can compare data with source of truth like DB or Data returned by services

});