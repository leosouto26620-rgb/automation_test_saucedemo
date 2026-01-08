import {Page, Locator, expect} from "@playwright/test"

export class LoginPage {
  readonly userInput: Locator;
  readonly passInput: Locator;
  readonly btnLogin: Locator;

  constructor(private page: Page) {
    this.userInput = page.locator('[data-test="username"]');
    this.passInput = page.locator('[data-test="password"]');
    this.btnLogin = page.locator('[data-test="login-button"]');
  }

  getElement(name: string) {
    return this.page.locator(`[data-test="${name}"]`);
  }

  async validateVisibleText(name: string) {
    await expect(this.page.getByText(name)).toBeVisible();
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async validateURL(url: string) {
    await expect(this.page).toHaveURL(url);
  }

  async loginForm(user: string, pass: string) {
    await this.userInput.fill(user);
    await this.passInput.fill(pass);
    await this.btnLogin.click();
  }

  async loginError (name: string, text: string){
    await expect(this.getElement(name)).toBeVisible();
    await expect(this.getElement(name)).toContainText(text);
  }

}