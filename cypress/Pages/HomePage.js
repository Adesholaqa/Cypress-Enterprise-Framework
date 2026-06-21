import BasePage from './BasePage';
class HomePage extends BasePage {
    loginLink = 'a[href="/login"]';
    open() {
        this.visit('/');
    }

    clickLogin() {
        this.click(this.loginLink);
    }
}

export default new HomePage();