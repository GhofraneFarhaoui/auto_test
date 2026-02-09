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
    chromeOptions.addArguments('--disable-dev-shm-usage');
    chromeOptions.addArguments('--disable-gpu');
    chromeOptions.addArguments('user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    chromeOptions.setUserPreferences({'profile.default_content_settings.popups': 0});
    
    console.log('🔄 Initialisation du navigateur Chrome...');
    
    try {
      const chromedriverPath = require('chromedriver').path;
      
      const service = new chrome.ServiceBuilder(chromedriverPath);
      
      this.driver = await new Builder()
        .forBrowser('chrome')
        .setChromeService(service)
        .setChromeOptions(chromeOptions)
        .build();
      
      // Augmenter le timeout implicite
      await this.driver.manage().setTimeouts({ implicit: 10000 });
      
      console.log('✅ Navigateur Chrome initialisé');
    } catch (error) {
      console.error('❌ Erreur lors de l\'initialisation du navigateur:', error);
      throw error;
    }
  }

  async cleanup(): Promise<void> {
    if (this.driver) {
      try {
        await this.driver.quit();
        console.log('✅ Navigateur fermé');
      } catch (error) {
        console.error('❌ Erreur lors de la fermeture:', error);
      }
    }
  }
}

setWorldConstructor(CustomWorld);