import { Page } from "@playwright/test";
import { ProductsComponent } from "../components/ProductsComponent";
import { BaseLoggedInPage } from "./BaseLoggedInPage";



export class InventoryPage extends BaseLoggedInPage {
  public products: ProductsComponent;


  constructor(protected readonly page: Page) {
    super(page)
    this.products = new ProductsComponent(this.page.getByTestId('page.inventory'));
  }

}