import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page/LoginPage";

test.describe("Login flow", () => {
  test("Login with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto("/");
    await loginPage.validateURL("/");
    await loginPage.loginForm("standard_user", "wrong_password");
    await loginPage.loginError(
      "error",
      "Username and password do not match any user in this service"
    );
  });
});
