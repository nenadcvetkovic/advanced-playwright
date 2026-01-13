import { Page } from "@playwright/test";
import { StepOneForm } from "../components/StepOneForm";
import { BaseLoggedInPage } from "./BaseLoggedInPage";


export class CheckoutStepOnePage extends BaseLoggedInPage {

    public stepOne : StepOneForm

    constructor (protected readonly page : Page) {
        super(page)
        this.stepOne = new StepOneForm(this.page.locator('[data-testid="page.checkout.step1"] form'))

        
    }  
}