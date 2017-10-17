const path = require('path');
const webpack = require('webpack');

// module.exports = {
//   entry: './src',
//   output: {
//     library: 'BreathingColors',
//     libraryTarget: 'commonjs2',
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'index.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['env']
//           }
//         }
//       }
//     ]
//   }
// }

function createConfig(target) {
  var name = 'index.js';

  if(target !== 'commonjs2') {
    name = 'vue-breathing-colors.js'
  }

  var output = {
    library: 'BreathingColors',
    libraryTarget: target,
    path: path.resolve(__dirname, 'dist'),
    filename: name
  }

  if(typeof target === 'undefined') {
    name = 'vue-breathing-colors.js';
    output = {
      path: path.resolve(__dirname, 'dist'),
      filename: name
    }
  }

  return {
    name: target,
    entry: './src',
    output: output,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    }
  }
}

module.exports = [
  createConfig('var'),
  createConfig('commonjs2')
]