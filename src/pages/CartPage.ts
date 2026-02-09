import { WebDriver, By } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  // Locators
  private pageTitle = By.css('.title');
  private cartItems = By.css('.cart_item');
  private continueShoppingButton = By.id('continue-shopping');
  private checkoutButton = By.id('checkout');
  private removeButtons = By.css('button[id^="remove"]');
  private cartQuantity = By.css('.cart_quantity');

  constructor(driver: WebDriver) {
    super(driver);
  }

  async isOnCartPage(): Promise<boolean> {
    try {
      const url = await this.getCurrentUrl();
      return url.includes('cart.html');
    } catch {
      return false;
    }
  }

  async getCartItemsCount(): Promise<number> {
    const items = await this.driver.findElements(this.cartItems);
    return items.length;
  }

  async removeItemFromCart(index: number): Promise<void> {
    const buttons = await this.driver.findElements(this.removeButtons);
    if (index >= 0 && index < buttons.length) {
      await buttons[index].click();
    }
  }

  async proceedToCheckout(): Promise<void> {
    await this.clickElement(this.checkoutButton);
  }

  async continueShopping(): Promise<void> {
    await this.clickElement(this.continueShoppingButton);
  }

  async isCartEmpty(): Promise<boolean> {
    const items = await this.driver.findElements(this.cartItems);
    return items.length === 0;
  }
}