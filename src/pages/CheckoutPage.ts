import { WebDriver, By } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  // Locators - Step 1: Information
  private firstNameInput = By.id('first-name');
  private lastNameInput = By.id('last-name');
  private postalCodeInput = By.id('postal-code');
  private continueButton = By.id('continue');
  private cancelButton = By.id('cancel');
  private errorMessage = By.css('h3[data-test="error"]');
  
  // Locators - Step 2: Overview
  private finishButton = By.id('finish');
  private summaryTotal = By.css('.summary_total_label');
  
  // Locators - Step 3: Complete
  private completeHeader = By.css('.complete-header');
  private completeText = By.css('.complete-text');

  constructor(driver: WebDriver) {
    super(driver);
  }

  // Step 1: Enter Information
  async enterFirstName(firstName: string): Promise<void> {
    await this.typeText(this.firstNameInput, firstName);
  }

  async enterLastName(lastName: string): Promise<void> {
    await this.typeText(this.lastNameInput, lastName);
  }

  async enterPostalCode(postalCode: string): Promise<void> {
    await this.typeText(this.postalCodeInput, postalCode);
  }

  async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterPostalCode(postalCode);
  }

  async clickContinue(): Promise<void> {
    await this.clickElement(this.continueButton);
  }

  async getErrorMessage(): Promise<string> {
    return await this.getElementText(this.errorMessage);
  }

  async isErrorDisplayed(): Promise<boolean> {
    return await this.isElementDisplayed(this.errorMessage);
  }

  // Step 2: Overview
  async clickFinish(): Promise<void> {
    await this.clickElement(this.finishButton);
  }

  async getTotalPrice(): Promise<string> {
    return await this.getElementText(this.summaryTotal);
  }

  // Step 3: Complete
  async getCompleteHeader(): Promise<string> {
    return await this.getElementText(this.completeHeader);
  }

  async getCompleteText(): Promise<string> {
    return await this.getElementText(this.completeText);
  }

  async isOrderComplete(): Promise<boolean> {
    return await this.isElementDisplayed(this.completeHeader);
  }
}