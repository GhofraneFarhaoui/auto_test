# 🧪 Projet de Test Logiciel - Automatisation avec TypeScript

## 📋 Description
Projet d'automatisation de tests avec Selenium WebDriver, Cucumber et TypeScript.

Site testé : [SauceDemo](https://www.saucedemo.com)

## 🛠️ Technologies
- **TypeScript** - Langage de programmation
- **Selenium WebDriver** - Automatisation navigateur
- **Cucumber** - BDD (Behavior Driven Development)
- **Chai** - Assertions
- **Cucumber HTML Reporter** - Génération de rapports

## 📁 Architecture du Projet
```
projet-test-selenium-ts/
├── features/          # Scénarios Gherkin (.feature)
├── src/
│   ├── pages/        # Page Object Model
│   ├── steps/        # Step Definitions
│   └── support/      # Configuration et hooks
├── reports/          # Rapports de test
│   └── screenshots/  # Captures d'écran des échecs
└── dist/             # Code TypeScript compilé
```

## 🚀 Installation
```bash
# Installer les dépendances
npm install
```

## ▶️ Exécution des Tests
```bash
# Exécuter tous les tests
npm test

# Exécuter les tests et générer le rapport HTML
npm run test:report

# Nettoyer les rapports
npm run clean
```

## 📊 Rapports
Les rapports sont générés dans le dossier `reports/` :
- `cucumber-report.html` - Rapport HTML complet
- `cucumber-report.json` - Rapport JSON
- `screenshots/` - Captures d'écran des tests échoués

## 🧪 Scénarios de Test

### 1. Authentification (login.feature)
- ✅ Connexion réussie
- ❌ Mot de passe incorrect
- ❌ Champs vides
- ❌ Nom d'utilisateur manquant

### 2. Recherche et Tri (search.feature)
- ✅ Affichage des produits
- ✅ Tri alphabétique
- ✅ Tri par prix

### 3. Panier (cart.feature)
- ✅ Ajout de produit
- ✅ Ajout de plusieurs produits
- ✅ Suppression de produit
- ✅ Panier vide

### 4. Checkout (form.feature)
- ✅ Soumission réussie
- ✅ Validation complète
- ❌ Prénom manquant
- ❌ Nom manquant
- ❌ Code postal manquant

## 👨‍🎓 Auteur
farhaoui ghofrane

## 📅 Date
Février 2026