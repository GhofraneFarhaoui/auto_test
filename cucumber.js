module.exports = {
  default: {
    // Spécifier l'ordre exact des fichiers
    paths: [
      'features/login.feature',
      'features/search.feature',
      'features/cart.feature',
      'features/form.feature'
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