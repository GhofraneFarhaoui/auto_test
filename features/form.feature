#language: fr

Fonctionnalité: Processus de paiement (checkout)
  En tant qu'utilisateur
  Je veux finaliser ma commande
  Afin de recevoir mes produits

  Contexte:
    Étant donné que je suis connecté avec "standard_user" et "secret_sauce"
    Et j'ajoute le produit "Sauce Labs Backpack" au panier
    Et je vais au panier
    Et je clique sur le bouton checkout

  Scénario: Soumission réussie du formulaire de checkout
    Quand je remplis le prénom "John"
    Et je remplis le nom "Doe"
    Et je remplis le code postal "75001"
    Et je clique sur continuer
    Alors je suis sur la page de résumé de commande

  Scénario: Validation réussie de la commande complète
    Quand je remplis le prénom "Marie"
    Et je remplis le nom "Dupont"
    Et je remplis le code postal "69001"
    Et je clique sur continuer
    Et je clique sur terminer la commande
    Alors la commande est confirmée avec le message "Thank you for your order!"

  Scénario: Échec avec prénom manquant
    Quand je remplis le nom "Doe"
    Et je remplis le code postal "75001"
    Et je clique sur continuer
    Alors un message d'erreur checkout "First Name is required" s'affiche

  Scénario: Échec avec nom manquant
    Quand je remplis le prénom "John"
    Et je remplis le code postal "75001"
    Et je clique sur continuer
    Alors un message d'erreur checkout "Last Name is required" s'affiche

  Scénario: Échec avec code postal manquant
    Quand je remplis le prénom "John"
    Et je remplis le nom "Doe"
    Et je clique sur continuer
    Alors un message d'erreur checkout "Postal Code is required" s'affiche