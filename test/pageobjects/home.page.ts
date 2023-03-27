import Page from './page.ts';
import {browser} from "@wdio/globals";

/**
*Coin Market Home Page
**/
class HomePage extends Page{

    public get closeCookiePopup(){
        return $('//div[@class="cmc-cookie-policy-banner__close"]');
    }

    public get row(){
        return $('//div[@class="sc-aef7b723-0 sc-fc8e4bda-0 dBikMg"]');
    }
    public get algorithm(){
        return $('//button[contains(text(), "Algorithm")]');
    }

    public get algorithmType(){
        return $('//input[@class="sc-ecd5a54c-1 hCwYVK cmc-input"]');
    }

    public get selectAlgorithmType(){
        return $('//input[@class="sc-ecd5a54c-1 hCwYVK cmc-input"]');
    }

    public get tableElemnt(){
        return $$('//table[@class="sc-beb003d5-3 ieTeVa cmc-table  "]/tbody/tr');
    }

    public get paginationTab(){
        return $$('//div[@class="sc-18df06a5-3 hiNKNZ"]//ul//li[@class="page" or  @class="page active"]');
    }

    public get numberOfRecord(){
        return $('//div[@class="sc-aef7b723-0 sc-18df06a5-0 hBoqvQ"]/p');
    }

    public async filterRecordsByRow(row: string){
        await this.closeCookiePopup.click();
        await this.row.click();
        await $("//button[contains(text(), \""+row+"\")]").click();
        await browser.pause(2000);
    }

    public async filterSelection(algorithmm: string){
        const filter = await browser.waitUntil(async () => {
            const elems = await $$('//button[contains(text(), "Filters")]')
                console.log(elems.length);
                if (elems.length !== 2) {
                    return false
                }
                return elems[1]
        }, {
            timeoutMsg: 'Never found enough the element elements'
        })

        await filter.click();

        console.log(await browser.execute(() => window.scrollY))
        await browser.scroll(0, 500);
        console.log(await browser.execute(() => window.scrollY))

        await browser.pause(3000);
        await this.algorithm.click();
        await browser.pause(2000);
        await this.algorithmType.setValue(algorithmm);
        await browser.pause(1000);
        await $("//li[text()=\""+algorithmm+"\"]").click();
        await browser.pause(1000);

        const tableData = await browser.waitUntil(async () => {
            const elems = await $$('//table[@class="sc-beb003d5-3 ieTeVa cmc-table  "]/tbody/tr')
                if (elems.length !== 20) {
                    return false
                }
                return elems[1]
        }, {
            timeoutMsg: 'Never found enough tableElement element elements'
        })
        await expect(tableData).toBeExisting();
    }

    public async numberOfPaginationTab(){
        browser.scroll(0, 500);
        browser.pause(2000);
        var tabCount = await this.paginationTab.length;
        var pageCount = await $('//div[@class="sc-18df06a5-3 hiNKNZ"]//ul//li[@class=\'page\' or  @class="page active"]['+tabCount+']').getText();
        console.log("Page count ========>>>" + pageCount);
        browser.scroll(0, 0);
        browser.pause(2000);
    }

    public async printCryptoTableData(){
        var recordCountData = await this.numberOfRecord.getText();
        console.log("Total number of records present == > " + recordCountData.replace('Showing 1 - 20 out of ', ''));
        var coinMap = new Map();
        browser.scroll(0, 1200);
        for(let i=1; i <= 20;i++){
            var coinName = await $('//tbody//tr['+i+']//a[@class="cmc-link"][1]/div/div/div//p[1]').getText();
            var price = await await $('//tbody/tr['+i+']//a[@class="cmc-link"]/span').getText();
            coinMap.set(coinName, price);
        }
        browser.scroll(0, 0);
        console.log("List of coin in 1st 20 row ===>");
        return coinMap;
    }

    /**
    * overwrite specific options to adapt it to page object
    **/
     public openHomePage(url: String){
        return super.openHomePage(url);
     }
}
export default new HomePage();