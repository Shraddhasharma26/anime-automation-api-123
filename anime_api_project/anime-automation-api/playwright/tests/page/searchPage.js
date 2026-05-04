const { expect } = require('@playwright/test');
const basePage = require('./basePage.js');
//const addCart = require('./addCart.js')

class searchPage extends basePage
{
    constructor(page)
    {
        super(page)
        this.page=page
        this.searchbartext=null
    }
    async searchBar()
    {
        await this.page.locator("//input[@value='Search']").click()
    }
    async validSearch()
    {
        const searchbar = await this.page.locator("//input[@value='Search store']").fill('jewelry')
        await this.page.mouse.down();
        await this.page.keyboard.press('Enter');
        
    }
    async validAddTowatchlist()
    {
        await this.page.locator("//*[contains(text(), 'Create Your Own Jewelry')]").scrollIntoViewIfNeeded();
        await this.page.locator("//a[normalize-space()='Create Your Own Jewelry']").click()
    }
} 
module.exports = searchPage