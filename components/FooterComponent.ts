import { Locator } from "@playwright/test";



export class FooterComponent {


  constructor(private readonly root: Locator) {

  }



  async getCompanyData(): Promise<string> {
    return await this.root.getByTestId("footer.company").innerText();
  }

  async getContactInfo(): Promise<string> {
    return await this.root.getByTestId("footer.contact").innerText();
  }

}