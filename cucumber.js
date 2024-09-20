// cucumber.js

module.exports = {
<<<<<<< HEAD
  default: {
    require: ['tests/step_definitions/*.ts', 'tests/support/*.ts'], // Les chemins vers vos fichiers d'étapes et hooks
    format: ['json:./reports/cucumber_report.json'], // Crée un rapport JSON
    publishQuiet: true,
  },
};
=======
 default: `--require-module ts-node/register --require ./tests/**/*.ts --format progress`,
 format: ['progress'],
 timeout: 10000, // Increase timeout if needed
  //"require": ["tests/example.step/**/*.ts"],
  "format": ["progress"]
};


  


>>>>>>> f3003700d6c7f7eb5f9f38988f126616a8c79380
