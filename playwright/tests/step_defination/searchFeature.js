const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const basePage = require('../page/basePage.js');
const loginPage = require('../page/loginPage.js');
const searchPage = require('../page/searchPage.js')
const { chromium } = require('playwright');

Given('user visit website and login to it', async function()
{
 this.browser = await chromium.launch({ headless: false });
 this.page = await this.browser.newPage();
 const urlhit = new basePage(this.page)
 await urlhit.goToUrl('https://demowebshop.tricentis.com/')
 const loginButton = new loginPage(this.page)
 await loginButton.loginFlow('shraddhasharma2603@gmail.com', 'Shraddha@26')

})
When('user selects the search bar',async function()
{
 const searchfun = new searchPage(this.page)
 await searchfun.searchBar()
})
When('user finds the item',async function()
{
 const searchitem = new searchPage(this.page)
 await searchitem.validSearch()
})
Then('user adds to wishlists',async function()
{
 const watchlist = new searchPage(this.page)
 await watchlist.validAddTowatchlist()
})