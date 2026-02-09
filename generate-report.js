const fs = require('fs');
const path = require('path');

const reportsDir = path.join(__dirname, 'reports');
const jsonFile = path.join(reportsDir, 'cucumber-report.json');

if (fs.existsSync(jsonFile)) {
  console.log('\n✅ Rapport JSON généré avec succès dans reports/cucumber-report.json');
  
  // Afficher un résumé
  const report = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
  console.log(`\n📊 Résumé:`);
  report.forEach(feature => {
    console.log(`\n📁 ${feature.name}`);
    feature.elements.forEach(scenario => {
      const passed = scenario.steps.filter(s => s.result.status === 'passed').length;
      const failed = scenario.steps.filter(s => s.result.status === 'failed').length;
      const status = failed > 0 ? '❌' : '✅';
      console.log(`  ${status} ${scenario.name} (${passed}/${scenario.steps.length} steps)`);
    });
  });
} else {
  console.log('\n⚠️ Rapport JSON non trouvé. Exécutez d\'abord les tests.');
}