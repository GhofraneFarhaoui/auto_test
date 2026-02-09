Feature: Shopping cart management

Background:
  Given je suis connecté avec "standard_user" et "secret_sauce"

Scenario: Add one product to cart
  When j'ajoute le produit "Sauce Labs Backpack" au panier
  Then le badge du panier affiche "1"
  And je vais au panier
  And je vois 1 produit dans le panier

Scenario: Add multiple products to cart
  When j'ajoute le produit "Sauce Labs Backpack" au panier
  And j'ajoute le produit "Sauce Labs Bike Light" au panier
  And j'ajoute le produit "Sauce Labs Bolt T-Shirt" au panier
  Then le badge du panier affiche "3"

Scenario: Remove product from cart
  When j'ajoute le produit "Sauce Labs Backpack" au panier
  And je vais au panier
  And je supprime le produit du panier à l'index 0
  Then le panier est vide

Scenario: Cart is empty by default
  When je vais au panier
  Then le panier est vide
