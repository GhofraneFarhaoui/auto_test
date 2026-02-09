

Fonctionnalité: Gestion du panier d'achat
  En tant qu'utilisateur connecté
  Je veux gérer mon panier
  Afin d'acheter des produits

  Contexte:
    Étant donné que je suis connecté avec "standard_user" et "secret_sauce"

  Scénario: Ajout d'un produit au panier avec succès
    Quand j'ajoute le produit "Sauce Labs Backpack" au panier
    Alors le badge du panier affiche "1"
    Et je vais au panier
    Et je vois 1 produit dans le panier

  Scénario: Ajout de plusieurs produits au panier
    Quand j'ajoute le produit "Sauce Labs Backpack" au panier
    Et j'ajoute le produit "Sauce Labs Bike Light" au panier
    Et j'ajoute le produit "Sauce Labs Bolt T-Shirt" au panier
    Alors le badge du panier affiche "3"

  Scénario: Suppression d'un produit du panier
    Quand j'ajoute le produit "Sauce Labs Backpack" au panier
    Et je vais au panier
    Et je supprime le produit du panier à l'index 0
    Alors le panier est vide

  Scénario: Panier vide au départ
    Quand je vais au panier
    Alors le panier est vide