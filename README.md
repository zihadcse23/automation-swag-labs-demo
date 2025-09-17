## Swag Labs Demo Automation

### Summary
his project automates end-to-end testing of the Swag Labs demo site using WebdriverIO and JavaScript. It covers login scenarios for different users, cart operations, product sorting, checkout flow, and purchase verification. Page Object Model (POM) is used for reusable locators like login, logout, menu, reset, and cross buttons. The project is scalable, maintainable, and provides a complete automation framework for Swag Labs. <br>

**Testing Scope:** Automation Testing <br>
**Test Environment:** (https://www.saucedemo.com/) <br>
**Test Scenarios:**  
1. **Locked Out User:**  
   - Try login with `locked_out_user` and verify the error message.  

2. **Standard User Checkout Flow:**  
   - Log in with `standard_user`.  
   - From the hamburger menu, reset the App State.  
   - Add any three items to the cart.  
   - Navigate to the final checkout page and verify the product names and total price.  
   - Finish the purchase journey and verify the successful order message.  
   - Reset the App State again and log out.  

3. **Performance Glitch User Checkout Flow:**  
   - Login with `performance_glitch_user` and reset the App State.  
   - Filter by name (Z to A) and select the first product into the cart.  
   - Navigate to the final checkout page and verify all the products' names and the total price.  
   - Finish the purchase journey and verify the successful order message.  
   - Reset the App State again and log out.

### Author: [Zihad](https://github.com/zihadcse23)

### Clone Locally
```bash 
git clone https://github.com/zihadcse23/automation-swag-labs-demo.git
```

### Additional Information:
**Automation Testing**

You are asking for automation tests on the (https://www.saucedemo.com/) site.

01. Try login with locked_out_user and verify the error message.
02. Log in with standard_user. Then, from the hamburger menu, reset the App State. Add any three items to the cart. Navigate to the final checkout page and verify the product name and total price. Finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.
03. Login with performance_glitch_user and reset the App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate up to the final checkout page and verify all the products' names and the total price. Then finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.
