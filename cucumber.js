// cucumber.js

module.exports = {
  default: {
    require: ['tests/step_definitions/*.ts', 'tests/support/*.ts'], // Les chemins vers vos fichiers d'étapes et hooks
    format: ['json:./reports/cucumber_report.json'], // Crée un rapport JSON
    publishQuiet: true,
  },
};