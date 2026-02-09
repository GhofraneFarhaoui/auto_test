import { WebDriver, By, until, WebElement } from 'selenium-webdriver';

export class BasePage {
  protected driver: WebDriver;
  protected timeout: number = 10000;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  protected async waitForElement(locator: By): Promise<WebElement> {
    return await this.driver.wait(
      until.elementLocated(locator),
      this.timeout,
      `Élément non trouvé: ${locator}`
    );
  }

  protected async clickElement(locator: By): Promise<void> {
    const element = await this.waitForElement(locator);
    await this.driver.wait(until.elementIsVisible(element), this.timeout);
    await this.driver.wait(until.elementIsEnabled(element), this.timeout);
    await element.click();
  }

  protected async typeText(locator: By, text: string): Promise<void> {
    const element = await this.waitForElement(locator);
    await this.driver.wait(until.elementIsVisible(element), this.timeout);
    await element.clear();
    await element.sendKeys(text);
  }

  protected async getElementText(locator: By): Promise<string> {
    const element = await this.waitForElement(locator);
    await this.driver.wait(until.elementIsVisible(element), this.timeout);
    return await element.getText();
  }
  protected async isElementDisplayed(locator: By): Promise<boolean> {
    try {
      const element = await this.waitForElement(locator);
      return await element.isDisplayed();
    } catch (error) {
      return false;
    }
  }
  async navigateTo(url: string): Promise<void> {
    await this.driver.get(url);
  }
  async getCurrentUrl(): Promise<string> {
    return await this.driver.getCurrentUrl();
  }
}