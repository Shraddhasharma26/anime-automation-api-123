// tests/hooks.js
const { BeforeAll, AfterAll, Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const {firefox} =require('@playwright/test')

setDefaultTimeout(60 * 1000);

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false, slowMo: 100 });
});
BeforeAll(async function()
{
  browserfirefox = await firefox.launch({headless:false, slowMo:100});
})

AfterAll(async function () {
  if (browser) await browser.close();
});
AfterAll(async function()
{
  if(browserfirefox) await browserfirefox.close()
})

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();   // <-- this.page created here
});

After(async function () {
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
});
