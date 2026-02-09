

Fonctionnalité: Authentification utilisateur
  En tant qu'utilisateur
  Je veux me connecter à l'application
  Afin d'accéder aux fonctionnalités

  Contexte:
    Étant donné que je suis sur la page de connexion

  Scénario: Connexion réussie avec des identifiants valides
    Quand je saisis le nom d'utilisateur "standard_user"
    Et je saisis le mot de passe "secret_sauce"
    Et je clique sur le bouton de connexion
    Alors je suis redirigé vers la page des produits

  Scénario: Connexion échouée avec un mot de passe incorrect
    Quand je saisis le nom d'utilisateur "standard_user"
    Et je saisis le mot de passe "mauvais_mot_de_passe"
    Et je clique sur le bouton de connexion
    Alors un message d'erreur "Username and password do not match" s'affiche

  Scénario: Connexion échouée avec des champs vides
    Quand je clique sur le bouton de connexion
    Alors un message d'erreur "Username is required" s'affiche

  Scénario: Connexion échouée avec nom d'utilisateur vide
    Quand je saisis le mot de passe "secret_sauce"
    Et je clique sur le bouton de connexion
    Alors un message d'erreur "Username is required" s'affiche