import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddfilterPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get addFilter () {
        return $('//button[@class="sc-44910c32-0 joPzXo sc-cc37dd9f-0 sc-7b31fd38-0 cmPAGl" and contains(text(),"+")]');
    }

    public get allCryptoCurrencies () {
        return $('//button[@class="sc-44910c32-0 bzvoOy cmc-filter-button" and text()="All Cryptocurrencies"]');
    }

    public get coins(){
        return $('//button[text()="Coins"]');
    }

    public get price () {
        return $('//button[text()="Price"]');
    }

    public get inputPriceRangeMin() {
        return $('//input[@data-qa-id="range-filter-input-min"]');
    }

    public get inputPriceRangeMax() {
        return $('//input[@data-qa-id="range-filter-input-max"]');
    }

    public get mineable(){
        return $('#mineable');
    }

    public get applyFilterButton(){
        return $('//button[text()="Apply Filter"]');
    }

    public get showResultsButton(){
        return $('//button[text()="Show results"]');
    }

//Show results

    public async clickAddFilter(){
        await this.addFilter.click();
    }

    public async clickAllCryptoCurrencies(){
        await this.allCryptoCurrencies.click();
    }

    public async selectCoins(){
        await this.coins.click();
    }

    public async toggleMineable(){
    const toggleMine = await browser.waitUntil(async () => {
            const elems = await $$('#mineable')
                if (elems.length !== 2) {
                    return false
                }
                return elems[1]
        }, {
            timeoutMsg: 'Not found mineable toggle'
        })
        await toggleMine.click();
    }

    public async selectPrice(){
        await this.price.click();
    }

    public async setMinValueToPriceRange(minValue){
        await this.inputPriceRangeMin.setValue(minValue);
    }

    public async setMaxValueToPriceRange(maxValue){
        await this.inputPriceRangeMax.setValue(maxValue);
    }

    public async clickOnApplyFilter(){
        await this.applyFilterButton.click();
    }

    public async clickOnShowResults(){
        await this.showResultsButton.click();
    }

}
export default new AddfilterPage();
