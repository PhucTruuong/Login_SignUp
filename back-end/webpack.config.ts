const path = require('path');

module.exports = {
  entry: './src/index.ts', // Entry point of your application
  output: {
    filename: 'bundle.js', // Name of the output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  // Add more configuration as needed
  resolve: {
    fallback: {
      "crypto": false,
    },
  },
};