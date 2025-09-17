const Login = require('../locator/loginLocators');
const Logout = require('../locator/logoutLocators');
const Menu = require ('../locator/openMenuLocators');

describe('SauceDemo Performance Glitch User Checkout Flow', () => {
    it('should complete purchase and verify order for performance_glitch_user', async () => {
        
        await Login.open();
        await Login.login('performance_glitch_user', 'secret_sauce');

        const inventoryContainer = await $('.inventory_list');
        await inventoryContainer.waitForDisplayed({ timeout: 3000 });

        await Menu.openMenu();
        await browser.pause(2000);
        await Menu.resetAppState();
        await Menu.closeMenu();

        const filterSelect = await $('.product_sort_container');
        await filterSelect.selectByVisibleText('Name (Z to A)');

        await browser.pause(2000)

        const firstProductAddButton = await $('.inventory_item button'); 
        await firstProductAddButton.click();

        await browser.pause(2000)

        const cartButton = await $('.shopping_cart_link');
        await cartButton.click();
        await browser.pause(2000)

        const checkoutButton = await $('#checkout');
        await checkoutButton.click();
        await browser.pause(2000)

        await $('#first-name').setValue('Joy');
        await $('#last-name').setValue('Hasan');
        await $('#postal-code').setValue('6410');
        await $('#continue').click();

        await browser.pause(1000)

        const cartItems = await $$('.inventory_item_name');
        const expectedItems = ['Test.allTheThings() T-Shirt (Red)'];
        for (let i = 0; i < expectedItems.length; i++) {
            await expect(cartItems[i]).toHaveText(expectedItems[i]);
        }
        await browser.pause(2000)

        const totalLabel = await $('.summary_total_label');
        const totalText = await totalLabel.getText();
        await expect(totalText).toContain('Total');
        await browser.pause(1000)

        
        const finishButton = await $('#finish');
        await finishButton.click();

      
        const successMessage = await $('.complete-header');
        await expect(successMessage).toHaveText('Thank you for your order!');
        await browser.pause(2000)

        await Menu.openMenu();
        await browser.pause(1000);
        await Menu.resetAppState();
        await Logout.logout();
        await browser.pause(2000);
        await Login.open();

   });

});
