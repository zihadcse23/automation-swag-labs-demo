const Login = require('../locator/loginLocators');

describe('Saucedemo Login Test', () => {
    it('should display an error when logging in with locked_out_user', async () => {
        
        await Login.open();
        await Login.login('locked_out_user', 'secret_sauce');

        const errorMessage = await $('[data-test="error"]');

        await expect(errorMessage).toBeDisplayed();
        await expect(errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        await browser.pause(2000);

        await errorMessage.saveScreenshot('./screenshots/errorMessage.png');
   
    });

});