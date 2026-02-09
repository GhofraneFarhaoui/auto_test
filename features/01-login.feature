Feature: User authentication

Background:
  Given je suis sur la page de connexion

Scenario: Successful login with valid credentials
  When je saisis le nom d'utilisateur "standard_user"
  And je saisis le mot de passe "secret_sauce"
  And je clique sur le bouton de connexion
  Then je suis redirigé vers la page des produits

Scenario: Login fails with wrong password
  When je saisis le nom d'utilisateur "standard_user"
  And je saisis le mot de passe "mauvais_mot_de_passe"
  And je clique sur le bouton de connexion
  Then un message d'erreur "Username and password do not match" s'affiche

Scenario: Login fails with empty fields
  When je clique sur le bouton de connexion
  Then un message d'erreur "Username is required" s'affiche

Scenario: Login fails with empty username
  When je saisis le mot de passe "secret_sauce"
  And je clique sur le bouton de connexion
  Then un message d'erreur "Username is required" s'affiche
