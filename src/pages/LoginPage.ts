import { WebDriver, By } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly URL = 'https://www.saucedemo.com';
  
  // Locators
  private usernameInput = By.id('user-name');
  private passwordInput = By.id('password');
  private loginButton = By.id('login-button');
  private errorMessage = By.css('h3[data-test="error"]');
  private errorButton = By.css('.error-button');

  constructor(driver: WebDriver) {
    super(driver);
  }

  async open(): Promise<void> {
    await this.navigateTo(this.URL);
  }

  async enterUsername(username: string): Promise<void> {
    await this.typeText(this.usernameInput, username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.typeText(this.passwordInput, password);
  }

  async clickLoginButton(): Promise<void> {
    await this.clickElement(this.loginButton);
  }

  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async getErrorMessage(): Promise<string> {
    return await this.getElementText(this.errorMessage);
  }

  async isErrorDisplayed(): Promise<boolean> {
    return await this.isElementDisplayed(this.errorMessage);
  }
}