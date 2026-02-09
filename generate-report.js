const report = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

// Créer le dossier reports si nécessaire
const reportsDir = path.join(__dirname, 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    'Projet': 'Test Logiciel - Mini-Projet',
    'Étudiant': 'Votre Nom',
    'Framework': 'Cucumber + Selenium + TypeScript',
    'Navigateur': 'Chrome',
    'Plateforme': process.platform,
    'Date d\'exécution': new Date().toLocaleString('fr-FR')
  },
  failedSummaryReport: true
};

report.generate(options);
console.log('\n✅ Rapport HTML généré avec succès dans reports/cucumber-report.html');