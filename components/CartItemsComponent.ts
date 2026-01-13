import { Locator } from "@playwright/test";


export class CartItemsComponent {

    private readonly checkoutSelector = 'cart.checkout'

    constructor (private readonly root : Locator){


    }

    async checkout () {
        await this.root.getByTestId(this.checkoutSelector).click();
    }
}