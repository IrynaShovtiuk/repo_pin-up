const {test, expect} = require('@playwright/test');

test('login user by email and check security page', async ({page}) => {
    await page.goto('https://pin-up.ua/');
    await page.locator('[data-testid="loginBtn"]').click();
    await page.locator('[data-testid="loginFormAuthInput"]').fill('paw_patrol@zabarna.net'); 
    await page.locator('[data-testid="loginFormPasswordInput"]').fill('paw_patrol'); 
    await page.locator('[data-testid="loginBtn"]').click();
    await page.locator('[data-testid="profileBtn"]').click();
    await expect(page).toHaveURL('https://pin-up.ua/profile');
    await page.locator('[data-testid="profileSecurityHistorySessionsLink"]').click();
    await expect(page).toHaveURL('https://pin-up.ua/profile/security');
})