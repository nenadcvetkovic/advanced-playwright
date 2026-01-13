import { Locator } from "@playwright/test";



export class LoginForm {

    private readonly usernameSelector = 'login.username';
    private readonly passwordSelector =  'login.password';
    private readonly submitButtonSelector =  'login.submit';
    private readonly errorMsgSelector =  'login.error';

    constructor(private readonly root: Locator) {


    }

    async login(username: string, password: string): Promise<void> {
         await this.root.getByTestId(this.usernameSelector).fill(username);
         await this.root.getByTestId(this.passwordSelector).fill(password);
         await this.root.getByTestId(this.submitButtonSelector).click();
    }

    async getErrors(): Promise<string> {
        return await this.root.getByTestId(this.errorMsgSelector).innerText();
    }




}