const LoginPage = require("../../pages/login.page");

describe("Sauce Demo Login", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  it("should show error for empty credentials", async () => {
    await LoginPage.login("", "");

    const errorMessage = await LoginPage.getErrorMessage();

    await expect(errorMessage).toContain("Username is required");
  });

  it("should show error for empty password", async () => {
    await LoginPage.login("test", "");

    const errorMessage = await LoginPage.getErrorMessage();

    await expect(errorMessage).toContain("Password is required");
  });

  it("should login successfully with username and password", async () => {
    const { username, password } = {
      username: "standard_user",
      password: "secret_sauce",
    };
    await LoginPage.login(username, password);

    const title = await LoginPage.getProductsTitle();
    await expect(title).toEqual("Products");

    // Verify page title
    const pageTitle = await browser.getTitle();
    await expect(pageTitle).toEqual("Swag Labs");
  });
});
