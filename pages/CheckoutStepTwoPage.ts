import { Page } from "@playwright/test";
import { StepTwoComponent } from "../components/StepTwoCOmponent";
import { BaseLoggedInPage } from "./BaseLoggedInPage";


export class CheckoutStepTwoPage extends BaseLoggedInPage {

  public stepTwo: StepTwoComponent
  constructor(protected readonly page: Page) {
    super(page);
    this.stepTwo = new StepTwoComponent(this.page.getByTestId('page.checkout.step2'))

  }
}