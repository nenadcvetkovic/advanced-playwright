import { Page } from "@playwright/test";
import { StepTwoComponent } from "../components/StepTwoCOmponent";


export class CheckoutStepTwoPage {

    public stepTwo : StepTwoComponent
    constructor (private readonly page : Page)  {
        this.stepTwo = new StepTwoComponent(this.page.getByTestId('page.checkout.step2'))

        
    }
}