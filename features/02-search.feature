Feature: Product search and sorting

Background:
  Given je suis connecté avec "standard_user" et "secret_sauce"

Scenario: Display all products after login
  Then je vois 6 produits affichés

Scenario: Sort products by name (A to Z)
  When je trie les produits par "Name (A to Z)"
  Then les produits sont triés par ordre alphabétique

Scenario: Sort products by price (low to high)
  When je trie les produits par "Price (low to high)"
  Then les produits sont triés par prix croissant
