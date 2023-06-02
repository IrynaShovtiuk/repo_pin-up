const {test, expect} = require('@playwright/test');

test('scenario1', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page.locator ('[class="heading"]')).toHaveText('Welcome to the-internet');
    await page.locator('[href="/login"]').click();
    await expect(page.locator ('h2')).toHaveText('Login Page');
    await page.locator('[id="username"]').fill('tomsmith');
    await page.locator('[id="password"]').fill('SuperSecretPassword!');
    await page.locator('[class="fa fa-2x fa-sign-in"]').click();
    await expect(page.locator('[id="flash"]')).toContainText('You logged into a secure area!');
})