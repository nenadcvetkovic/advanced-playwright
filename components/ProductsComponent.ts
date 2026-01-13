import { expect, Locator } from "@playwright/test";
import { ProductCardComponent } from "./ProductCardComponent";


export class ProductsComponent {

    private products : Array<ProductCardComponent> = [];

    constructor(private readonly root: Locator) {

    }

    private async initializeProducts(): Promise<void> {
       // await this.root.page().waitForLoadState('networkidle')
       this.products = [];
        const p = await this.root.locator('[data-testid^="inventory.item"]').all();
        for(const prod of p){
            this.products.push( new ProductCardComponent(prod) );
        }
    }



    async addToCartByIndex(index: number): Promise<void> {
        if(this.products.length === 0){
            await this.initializeProducts();
        }
        await this.products[index].addToCart();
    }

    async getproductByName(name: string) {
    if (this.products.length === 0) {
      await this.initializeProducts();
    }

    return this.products.find(async (product) => (await product.getName()) === name);
  }

  async getProductsCount() {
        const p = await this.root.locator('[data-testid^="inventory.item"]').all();
    return p.length;
  }

  async search(term: string) {
    await this.root.getByTestId('inventory.filter.search').fill(term);
    await this.root.getByTestId('inventory.filter.search').press('Enter');

  }

  async resetFilters() {
    await this.root.getByTestId('inventory.filters.clearAll').click();
  }

  async filterByMinPrice(minPrice: number) {
    await this.root.getByTestId('inventory.filter.minPrice').fill(minPrice.toString());
    await this.root.getByRole('button', { name: 'Apply' }).click();
  }

  async filterByMaxPrice(maxPrice: number) {
    await this.root.getByTestId('inventory.filter.maxPrice').fill(maxPrice.toString());
    await this.root.getByRole('button', { name: 'Apply' }).click();
  }

  async filterByPrice(options: {minPrice?: number, maxPrice?: number}) {
    const start = await this.getProductsCount();
    if (options.minPrice){
          await this.root.getByTestId('inventory.filter.minPrice').fill(options.minPrice.toString());

    }
    if (options.maxPrice){
          await this.root.getByTestId('inventory.filter.maxPrice').fill(options.maxPrice.toString());

    }
        await this.root.getByRole('button', { name: 'Apply' }).click();

    await expect(async () => {
      const count = await this.getProductsCount()
      expect(count).toBeLessThan(start)

    }).toPass({timeout: 10000, intervals: [500, 1000, 2000]})

  }

}