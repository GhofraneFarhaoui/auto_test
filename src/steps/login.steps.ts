import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

Given('que je suis sur la page de connexion', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.driver);
  await loginPage.open();
});

When('je saisis le nom d\'utilisateur {string}', async function (this: CustomWorld, username: string) {
  const loginPage = new LoginPage(this.driver);
  await loginPage.enterUsername(username);
});

When('je saisis le mot de passe {string}', async function (this: CustomWorld, password: string) {
  const loginPage = new LoginPage(this.driver);
  await loginPage.enterPassword(password);
});

When('je clique sur le bouton de connexion', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.driver);
  await loginPage.clickLoginButton();
});

Then('je suis redirigé vers la page des produits', async function (this: CustomWorld) {
  const productsPage = new ProductsPage(this.driver);
  const isOnProductsPage = await productsPage.isOnProductsPage();
  expect(isOnProductsPage).to.be.true;
});

Then('un message d\'erreur {string} s\'affiche', async function (this: CustomWorld, expectedMessage: string) {
  const loginPage = new LoginPage(this.driver);
  const isErrorDisplayed = await loginPage.isErrorDisplayed();
  expect(isErrorDisplayed).to.be.true;
  
  const actualMessage = await loginPage.getErrorMessage();
  expect(actualMessage).to.include(expectedMessage);
});