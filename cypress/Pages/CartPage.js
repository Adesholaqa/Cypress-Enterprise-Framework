import BasePage from './BasePage';
class CartPage extends BasePage {

    productLink = 'a[href="/products"]'
    addToCart = '.productinfo [data-product-id="1"]'
    continueShoppingButton = '[data-dismiss="modal"]'
    viewCartButton = 'li a[href="/view_cart"]'
    deleteProduct = '.cart_quantity_delete'

    clickProduct() {
        this.click(this.productLink);
    }

    clickAddToCart() {
        this.click(this.addToCart);

    }

    clickContinueShoppingButton() {
        this.click(this.continueShoppingButton);

    }

    clickViewCartButton() {
        this.click(this.viewCartButton);
    }

    clickDeleteProduct() {
        this.click(this.deleteProduct);
    }
}

export default new CartPage();