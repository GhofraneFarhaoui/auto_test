import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../support/world';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

When('je clique sur le bouton checkout', async function (this: CustomWorld) {
  const cartPage = new CartPage(this.driver);
  await cartPage.proceedToCheckout();
});

When('je remplis le prénom {string}', async function (this: CustomWorld, firstName: string) {
  const checkoutPage = new CheckoutPage(this.driver);
  await checkoutPage.enterFirstName(firstName);
});

When('je remplis le nom {string}', async function (this: CustomWorld, lastName: string) {
  const checkoutPage = new CheckoutPage(this.driver);
  await checkoutPage.enterLastName(lastName);
});

When('je remplis le code postal {string}', async function (this: CustomWorld, postalCode: string) {
  const checkoutPage = new CheckoutPage(this.driver);
  await checkoutPage.enterPostalCode(postalCode);
});

When('je clique sur continuer', async function (this: CustomWorld) {
  const checkoutPage = new CheckoutPage(this.driver);
  await checkoutPage.clickContinue();
});

Then('je suis sur la page de résumé de commande', async function (this: CustomWorld) {
  const url = await this.driver.getCurrentUrl();
  expect(url).to.include('checkout-step-two.html');
});

When('je clique sur terminer la commande', async function (this: CustomWorld) {
  const checkoutPage = new CheckoutPage(this.driver);
  await checkoutPage.clickFinish();
});

Then('la commande est confirmée avec le message {string}', async function (this: CustomWorld, expectedMessage: string) {
  const checkoutPage = new CheckoutPage(this.driver);
  const isComplete = await checkoutPage.isOrderComplete();
  expect(isComplete).to.be.true;
  
  const actualMessage = await checkoutPage.getCompleteHeader();
  expect(actualMessage).to.equal(expectedMessage);
});

Then('un message d\'erreur checkout {string} s\'affiche', async function (this: CustomWorld, expectedMessage: string) {
  const checkoutPage = new CheckoutPage(this.driver);
  const isErrorDisplayed = await checkoutPage.isErrorDisplayed();
  expect(isErrorDisplayed).to.be.true;
  
  const actualMessage = await checkoutPage.getErrorMessage();
  expect(actualMessage).to.include(expectedMessage);
});