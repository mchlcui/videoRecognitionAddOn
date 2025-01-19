const path = require('path');

module.exports = {
  mode: 'production',  // Use 'development' for debugging
  entry: './main.js',  // Main entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'helloWorld',  // Expose this library for Google Meet SDK
    libraryTarget: 'window' // Ensures it's available globally
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Ensures compatibility with modern JS
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};