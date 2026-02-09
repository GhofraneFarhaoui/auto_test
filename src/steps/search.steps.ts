import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { By } from 'selenium-webdriver';

Given('que je suis connecté avec {string} et {string}', async function (this: CustomWorld, username: string, password: string) {
  const loginPage = new LoginPage(this.driver);
  await loginPage.open();
  await loginPage.login(username, password);
});

Then('je vois {int} produits affichés', async function (this: CustomWorld, expectedCount: number) {
  const productsPage = new ProductsPage(this.driver);
  const items = await this.driver.findElements(By.css('.inventory_item'));
  expect(items.length).to.equal(expectedCount);
});

When('je trie les produits par {string}', async function (this: CustomWorld, sortOption: string) {
  const productsPage = new ProductsPage(this.driver);
  await productsPage.sortProducts(sortOption);
  // Attendre que le tri soit appliqué
  await this.driver.sleep(500);
});

Then('les produits sont triés par ordre alphabétique', async function (this: CustomWorld) {
  const productNames = await this.driver.findElements(By.css('.inventory_item_name'));
  const names: string[] = [];
  
  for (const element of productNames) {
    names.push(await element.getText());
  }
  
  const sortedNames = [...names].sort();
  expect(names).to.deep.equal(sortedNames);
});

Then('les produits sont triés par prix croissant', async function (this: CustomWorld) {
  const priceElements = await this.driver.findElements(By.css('.inventory_item_price'));
  const prices: number[] = [];
  
  for (const element of priceElements) {
    const priceText = await element.getText();
    const price = parseFloat(priceText.replace('$', ''));
    prices.push(price);
  }
  
  const sortedPrices = [...prices].sort((a, b) => a - b);
  expect(prices).to.deep.equal(sortedPrices);
});