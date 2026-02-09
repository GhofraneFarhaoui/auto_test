import { Browser, Page } from 'puppeteer';
import { By } from 'selenium-webdriver';

/**
 * Adapter to make Puppeteer work with Selenium WebDriver API
 */
export class PuppeteerWebDriver {
  constructor(private browser: Browser, private page: Page) {}

  async get(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'networkidle2' });
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async findElements(selector: string): Promise<any[]> {
    return await this.page.$$(selector);
  }

  async findElement(selector: string): Promise<any> {
    return await this.page.$(selector);
  }

  async quit(): Promise<void> {
    await this.browser.close();
  }

  manage() {
    return {
      setTimeouts: async (timeouts: any) => {
        // Puppeteer uses different timeout management
      }
    };
  }

  async sleep(ms: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  // Additional helpers
  async waitForElement(selector: string, timeout: number = 10000): Promise<any> {
    try {
      await this.page.waitForSelector(selector, { timeout });
      return await this.page.$(selector);
    } catch (e) {
      throw new Error(`Element not found: ${selector}`);
    }
  }

  async getText(selector: string): Promise<string> {
    await this.waitForElement(selector);
    return await this.page.$eval(selector, (el: any) => el.textContent);
  }

  async click(selector: string): Promise<void> {
    await this.waitForElement(selector);
    await this.page.click(selector);
  }

  async type(selector: string, text: string): Promise<void> {
    await this.waitForElement(selector);
    await this.page.type(selector, text);
  }
}
