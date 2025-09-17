class LoginLocators {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    
    async open() {
        await browser.url('/'); 
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.waitForClickable({ timeout: 2000 });
        await this.loginButton.click();
    }
}

module.exports = new LoginLocators();
