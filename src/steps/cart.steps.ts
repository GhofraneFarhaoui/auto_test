import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../support/world';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';


When('j\'ajoute le produit {string} au panier', async function (this: CustomWorld, productName: string) {
  const productsPage = new ProductsPage(this.driver);
  await productsPage.addProductToCartByName(productName);
});

Then('le badge du panier affiche {string}', async function (this: CustomWorld, expectedCount: string) {
  const productsPage = new ProductsPage(this.driver);
  const actualCount = await productsPage.getCartItemCount();
  expect(actualCount).to.equal(parseInt(expectedCount));
});

When('je vais au panier', async function (this: CustomWorld) {
  const productsPage = new ProductsPage(this.driver);
  await productsPage.goToCart();
});

Then('je vois {int} produit dans le panier', async function (this: CustomWorld, expectedCount: number) {
  const cartPage = new CartPage(this.driver);
  const actualCount = await cartPage.getCartItemsCount();
  expect(actualCount).to.equal(expectedCount);
});

When('je supprime le produit du panier à l\'index {int}', async function (this: CustomWorld, index: number) {
  const cartPage = new CartPage(this.driver);
  await cartPage.removeItemFromCart(index);
});

Then('le panier est vide', async function (this: CustomWorld) {
  const cartPage = new CartPage(this.driver);
  const isEmpty = await cartPage.isCartEmpty();
  expect(isEmpty).to.be.true;
});