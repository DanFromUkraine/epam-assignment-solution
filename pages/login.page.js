class LoginPage {
  get inputUsername() {
    return $('//input[@id="user-name"]');
  }
  get inputPassword() {
    return $('//input[@id="password"]');
  }
  get btnLogin() {
    return $('//input[@id="login-button"]');
  }
  get errorMessage() {
    return $('//h3[@data-test="error"]');
  }
  get productsTitle() {
    return $('//span[@class="title"]');
  }

  async open() {
    await browser.url("https://www.saucedemo.com/");
    await browser.maximizeWindow();
    logger.info("Opened Sauce Demo login page");
  }

  async enterUsername(username) {
    await this.inputUsername.setValue(username);
    logger.info(`Entered username: ${username}`);
  }

  async enterPassword(password) {
    await this.inputPassword.setValue(password);
    logger.info(`Entered password: ${password}`);
  }

  async clearUsername() {
    await this.inputUsername.clearValue();
    logger.info("Cleared username field");
  }

  async clearPassword() {
    await this.inputPassword.clearValue();
    logger.info("Cleared password field");
  }

  async clickLogin() {
    await this.btnLogin.click();
    logger.info("Clicked login button");
  }

  async getErrorMessage() {
    const message = await this.errorMessage.getText();
    logger.info(`Error message: ${message}`);
    return message;
  }

  async getProductsTitle() {
    const title = await this.productsTitle.getText();
    logger.info(`Products title: ${title}`);
    return title;
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}

module.exports = new LoginPage();
