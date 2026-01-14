import { Page } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";
import { ProductsComponent } from "../components/ProductsComponent";
import { FooterComponent } from "../components/FooterComponent";
import { BaseLoggedInPage } from "./BaseLoggedInPage";



export class InventoryPage extends BaseLoggedInPage {

  public products: ProductsComponent;


  constructor(protected readonly page: Page) {
    super(page)
    this.products = new ProductsComponent(this.page.getByTestId('page.inventory'));
    this.header = new HeaderComponent(this.page.locator('header.container'));
    this.footer = new FooterComponent(this.page.locator('footer.footer'));
  }

}