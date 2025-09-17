class MenuActions {
    get menuButton() { return $('#react-burger-menu-btn'); }
    get resetButton() { return $('#reset_sidebar_link'); }
    get crossButton() { return $('#react-burger-cross-btn'); }

    async openMenu() {
        await this.menuButton.waitForClickable({ timeout: 2000 });
        await this.menuButton.click();
    }

    async resetAppState() {
        await this.resetButton.waitForClickable({ timeout: 2000 });
        await this.resetButton.click();
    }

    async closeMenu() {
        await this.crossButton.click();
    }
}

module.exports = new MenuActions();
