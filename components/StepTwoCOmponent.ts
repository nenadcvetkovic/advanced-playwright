import { Locator } from "@playwright/test";


export class StepTwoComponent {

    private readonly finishSelector = 'checkout.finish'
    constructor (private readonly root : Locator){

    }

    async finish () {
        await this.root.getByTestId(this.finishSelector).click();

    }
}