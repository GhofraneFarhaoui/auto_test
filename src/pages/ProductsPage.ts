import { WebDriver, By } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  // Locators
  private pageTitle = By.css('.title');
  private inventoryItems = By.css('.inventory_item');
  private productSortDropdown = By.css('.product_sort_container');
  private addToCartButtons = By.css('button[id^="add-to-cart"]');
  private removeButtons = By.css('button[id^="remove"]');
  private shoppingCartBadge = By.css('.shopping_cart_badge');
  private shoppingCartLink = By.css('.shopping_cart_link');

  constructor(driver: WebDriver) {
    super(driver);
  }

  async isOnProductsPage(): Promise<boolean> {
    try {
      const url = await this.getCurrentUrl();
      const title = await this.getPageTitle();
      return url.includes('inventory.html') && title === 'Products';
    } catch {
      return false;
    }
  }

  async getPageTitle(): Promise<string> {
    return await this.getElementText(this.pageTitle);
  }

  async addProductToCartByIndex(index: number): Promise<void> {
    const buttons = await this.driver.findElements(this.addToCartButtons);
    if (index >= 0 && index < buttons.length) {
      await buttons[index].click();
    } else {
      throw new Error(`Produit à l'index ${index} n'existe pas`);
    }
  }

  async addProductToCartByName(productName: string): Promise<void> {
    const locator = By.id(`add-to-cart-${productName.toLowerCase().replace(/\s/g, '-')}`);
    await this.clickElement(locator);
  }

  async getCartItemCount(): Promise<number> {
    try {
      const badgeText = await this.getElementText(this.shoppingCartBadge);
      return parseInt(badgeText);
    } catch {
      return 0;
    }
  }

  async goToCart(): Promise<void> {
    await this.clickElement(this.shoppingCartLink);
  }

  async sortProducts(option: string): Promise<void> {
    const dropdown = await this.waitForElement(this.productSortDropdown);
    await dropdown.sendKeys(option);
  }
}