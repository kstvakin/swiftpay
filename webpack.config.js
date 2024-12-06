const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDirectory = path.resolve(__dirname);
const { presets, plugins } = require(`${appDirectory}/babel.config.js`);
const CopyWebpackPlugin = require('copy-webpack-plugin');
const compileNodeModules = [
  // Add every react-native package that needs compiling
  //'react-native-gesture-handler',
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.(js|jsx|ts|tsx)$/, // Updated to include .jsx
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(__dirname, '/src/web/index.jsx'), // Entry to your application
    path.resolve(__dirname, 'App.tsx'), // Updated to .jsx
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins,
    },
  },
};

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
  ],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  type: 'asset/resource',
  generator: {
    filename:'assets/images/[name].[ext]'
  }
  
};

const tsLoaderConfiguration = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules|\.d\.ts$/, // this line as well
  use: {
    loader: 'ts-loader',
    options: {
      compilerOptions: {
        noEmit: false, // this option will solve the issue
        allowImportingTsExtensions: false,
      },
    },
  },
};

module.exports = {
  entry: {
    app: path.join(__dirname, '/src/web/index.jsx'),
  },
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', 'jsx', '.ts', '.js', 'json'],
    alias: {
      'react-native$': 'react-native-web',
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
      tsLoaderConfiguration,
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/web/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/assets/images', to: 'assets/images' }, // Copy images to 'assets/images' in the output folder
      ],
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  }
};
