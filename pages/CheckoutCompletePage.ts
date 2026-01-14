import { Page } from "@playwright/test"
import { BaseLoggedInPage } from "./BaseLoggedInPage";

export class CheckoutCompletePage extends BaseLoggedInPage {

    constructor(protected readonly page: Page) {
      super(page);
    }

    async getMessage(): Promise<string> {
        return await this.page.locator('[data-testid="page.checkout.complete"] p').textContent() as string;
    }

}