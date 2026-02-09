import { Before, After, AfterStep, Status, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import * as fs from 'fs-extra';
import * as path from 'path';

// AUGMENTER LE TIMEOUT À 60 SECONDES
setDefaultTimeout(60000);

BeforeAll(async function () {
  console.log('🚀 Début de l\'exécution des tests\n');
  
  // Créer le dossier screenshots
  const screenshotsDir = path.join(__dirname, '../../reports/screenshots');
  await fs.ensureDir(screenshotsDir);
  
  // Nettoyer les anciens screenshots
  await fs.emptyDir(screenshotsDir);
});

Before(async function (this: CustomWorld, { pickle }) {
  console.log(`\n📝 Scénario: ${pickle.name}`);
  try {
    await this.init();
    console.log('✅ Navigateur initialisé avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation du navigateur:', error);
    throw error;
  }
});

AfterStep(async function (this: CustomWorld, { result, pickle, pickleStep }) {
  if (result.status === Status.FAILED) {
    try {
      const screenshot = await this.driver.takeScreenshot();
      const timestamp = Date.now();
      const scenarioName = pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
      const stepName = pickleStep.text.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);
      const screenshotPath = path.join(
        __dirname,
        '../../reports/screenshots',
        `ECHEC_${scenarioName}_${stepName}_${timestamp}.png`
      );
      
      await fs.writeFile(screenshotPath, screenshot, 'base64');
      console.log(`📸 Screenshot capturé: ${path.basename(screenshotPath)}`);
      
      // Attacher le screenshot au rapport Cucumber
      this.attach(screenshot, 'image/png');
    } catch (error) {
      console.error('❌ Erreur lors de la capture du screenshot:', error);
    }
  }
});

After(async function (this: CustomWorld, { result, pickle }) {
  const status = result?.status === Status.PASSED ? '✅ SUCCÈS' : '❌ ÉCHEC';
  console.log(`${status}: ${pickle.name}`);
  
  if (result?.status === Status.FAILED && result.message) {
    console.error(`Erreur: ${result.message}`);
  }
  
  try {
    await this.cleanup();
  } catch (error) {
    console.error('❌ Erreur lors de la fermeture du navigateur:', error);
  }
});

AfterAll(async function () {
  console.log('\n🏁 Fin de l\'exécution des tests');
});