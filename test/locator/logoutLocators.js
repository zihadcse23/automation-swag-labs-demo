class LogoutLocators { 
    get logoutButton() { return $('#logout_sidebar_link'); }

    async logout() {
        await this.logoutButton.waitForClickable({ timeout: 1000 });
        await this.logoutButton.click();
    }
}

module.exports = new LogoutLocators();
