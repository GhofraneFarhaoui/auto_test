import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { WebDriver, Builder } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';

export class CustomWorld extends World {
  driver!: WebDriver;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init(): Promise<void> {
    const chromeOptions = new chrome.Options();
    chromeOptions.addArguments('--start-maximized');
    chromeOptions.addArguments('--disable-blink-features=AutomationControlled');
    chromeOptions.addArguments('--no-sandbox');
    
    this.driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(chromeOptions)
      .build();
    
    console.log('✅ Navigateur Chrome initialisé');
  }

  async cleanup(): Promise<void> {
    if (this.driver) {
      await this.driver.quit();
      console.log('✅ Navigateur fermé');
    }
  }
}

setWorldConstructor(CustomWorld);