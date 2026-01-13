import { Locator } from "@playwright/test";


export class ProductCardComponent {


  constructor(private readonly root: Locator) {

  }

  async addToCart(): Promise<void> {
    await this.root.locator('[data-testid^="inventory.add"]').click();
  }


  async getName(): Promise<string> {
    return await this.root.locator('h3').innerText();
  }

  async getDescription(): Promise<string> {

    return await this.root.locator('p').textContent() || "";

  }

  async getPrice(): Promise<number> {
    const priceText = await this.root.locator('strong').textContent() as string;

    return parseFloat(priceText.replace(/\D+/, ''));
  }

  async openProductDetails(): Promise<void> {
    await this.root.locator('h3 a').click();
  }



}