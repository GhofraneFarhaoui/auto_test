Feature: Checkout process

Background:
  Given je suis connecté avec "standard_user" et "secret_sauce"
  And j'ajoute le produit "Sauce Labs Backpack" au panier
  And je vais au panier
  And je clique sur le bouton checkout

Scenario: Successful checkout form submission
  When je remplis le prénom "John"
  And je remplis le nom "Doe"
  And je remplis le code postal "75001"
  And je clique sur continuer
  Then je suis sur la page de résumé de commande

Scenario: Successful order completion
  When je remplis le prénom "Marie"
  And je remplis le nom "Dupont"
  And je remplis le code postal "69001"
  And je clique sur continuer
  And je clique sur terminer la commande
  Then la commande est confirmée avec le message "Thank you for your order!"

Scenario: Checkout fails with missing first name
  When je remplis le nom "Doe"
  And je remplis le code postal "75001"
  And je clique sur continuer
  Then un message d'erreur checkout "First Name is required" s'affiche

Scenario: Checkout fails with missing last name
  When je remplis le prénom "John"
  And je remplis le code postal "75001"
  And je clique sur continuer
  Then un message d'erreur checkout "Last Name is required" s'affiche

Scenario: Checkout fails with missing postal code
  When je remplis le prénom "John"
  And je remplis le nom "Doe"
  And je clique sur continuer
  Then un message d'erreur checkout "Postal Code is required" s'affiche
