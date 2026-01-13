import { Locator } from "@playwright/test";


export class StepOneForm {

    private readonly firstNameSelector = 'checkout.firstName'
    private readonly lastNameSelector = 'checkout.lastName'
    private readonly postalCodeSelector = 'checkout.postalCode'
    private readonly continueButtonSelector = 'checkout.continue'



    constructor (private readonly root : Locator){

    }

    async submit(firstName : string, lastName: string, postalCode: string){
        await this.root.getByTestId(this.firstNameSelector).fill(firstName)
        await this.root.getByTestId(this.lastNameSelector).fill(lastName)
        await this.root.getByTestId(this.postalCodeSelector).fill(postalCode)
        await this.root.getByTestId(this.continueButtonSelector).click()


    }
}