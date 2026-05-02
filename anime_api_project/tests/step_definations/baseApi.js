const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');


const baseClass = require('../pages/baseClass.js');

Given('User call the api',async function()
{
 const apicall = new baseClass(this.page)
 await apicall.getData()
})
When('user calls get function', async function()
{
 const checktitle = new baseClass(this.page)
 await checktitle.checkTitle()
})
Then('user gets the status', async function()
{
 const statuscheck = new baseClass(this.page)
 await statuscheck.statusCode()
})