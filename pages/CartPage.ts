import { Page } from "@playwright/test";
import { CartItemsComponent } from "../components/CartItemsComponent";


export class CartPage {

    public items : CartItemsComponent;   
    constructor (private readonly page : Page){
        this.items = new CartItemsComponent(this.page.getByTestId('page.cart'))
    }
}