module.exports = {
  default: {
    // Spécifier l'ordre exact des fichiers
    paths: [
      'features/01-login.feature',
      'features/02-search.feature',
      'features/03-cart.feature',
      'features/04-form.feature'
    ],
    require: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json',
      'summary'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    }
  }
};