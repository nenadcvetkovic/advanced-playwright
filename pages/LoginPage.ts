import { Page } from "@playwright/test";
import { LoginForm } from "../components/LoginForm";
import { FooterComponent } from "../components/FooterComponent";



export class LoginPage {

    public loginForm: LoginForm;
    public footer: FooterComponent;

    constructor(private readonly page: Page) {

        this.loginForm = new LoginForm(this.page.locator('[data-testid="page.login"] form'));
        this.footer = new FooterComponent(this.page.getByTestId("footer"));

    }

    async goto(): Promise<void> {
        await this.page.goto('/');
    }




}