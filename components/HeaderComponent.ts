import { expect, Locator } from "@playwright/test";



export class HeaderComponent {

    private readonly headerCartSelector = 'header.cart';
    private readonly headerCartCountSelector = 'header.cart.count';
    private readonly logoSelector = 'img[alt="Mountain Supply logo"]';


    constructor(private readonly root: Locator) {





    }

    async isLogoVisible(): Promise<boolean> {
        let result = false;
        try{
            await expect(this.root.locator(this.logoSelector)).toHaveCount(1, { timeout:2000 });
            result = true;
        } catch(e){}
    
        return result
    }

    async getCartItemCount(): Promise<number> {
       return parseInt( await this.root.getByTestId(this.headerCartCountSelector).textContent() as string );

    }

    async goToCart(){
        await this.root.getByTestId(this.headerCartSelector).click();
    }
}