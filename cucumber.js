module.exports = {
 default: `--require-module ts-node/register --require ./tests/**/*.ts --format progress`,
 format: ['progress'],
 timeout: 10000, // Increase timeout if needed
  //"require": ["tests/example.step/**/*.ts"],
  "format": ["progress"]
};


  


