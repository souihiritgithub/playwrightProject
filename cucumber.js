// cucumber.js

module.exports = {
<<<<<<< HEAD
 default: `--require-module ts-node/register --require ./tests/**/*.ts --format progress`,
 format: ['progress'],
 timeout: 10000, // Increase timeout if needed
  //"require": ["tests/example.step/**/*.ts"],
  "format": ["progress"]
};


  


=======
  default: {
    require: ['tests/step_definitions/*.ts', 'tests/support/*.ts'], // Les chemins vers vos fichiers d'étapes et hooks
    format: ['json:./reports/cucumber_report.json'], // Crée un rapport JSON
    publishQuiet: true,
  },
};
>>>>>>> 56e117dc2674e7976d2dc22e73680d36af6c5ffc
