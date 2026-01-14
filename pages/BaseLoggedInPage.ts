import { Page } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";


export abstract class BaseLoggedInPage {

    public header : HeaderComponent;
    public footer : FooterComponent;

    constructor (protected readonly page : Page){
         this.header = new HeaderComponent(this.page.locator('header.container'));
         this.footer = new FooterComponent(this.page.getByTestId("footer"));
    }
}