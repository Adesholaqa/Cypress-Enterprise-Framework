import HomePage from '../../Pages/HomePage';
import CartPage from '../../Pages/CartPage';
import LoginPage from '../../Pages/LoginPage';

describe("cart flow ", () => {

    it("Add a product to the cart", () => {
        HomePage.open();
        HomePage.clickLogin();
        cy.fixture('user').then((user) => {
            cy.fixture('loginUser').then((loginUser) => {

                LoginPage.enterEmail(loginUser.email);
                LoginPage.enterPassword(user.password);
                LoginPage.clickLoginButton();

                // let add an item to the cart

                CartPage.clickProduct();
               CartPage.clickAddToCart();
               CartPage.clickContinueShoppingButton();
               CartPage.clickViewCartButton();
               //CartPage.clickDeleteProduct();
            });
        });


    });
});