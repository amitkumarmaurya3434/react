var path = require('path');
var webpack = require('webpack');
var config = {
  entry: ['./main.js'],
  entry: {
    app: ["@babel/polyfill",__dirname + '/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    //filename: 'main.bundle.js'
    filename: '[name].bundle.js'
  },
  module: {
    loaders :[
       {
       test: /\.js?/,
       exclude: /node_modules/,
       loader: 'babel-loader',
      //  query: {
      //   presets: ['react', 'es2015', 'stage-1']
      // }
       },
       {
       test: /\.scss?/,
       loader: "style-loader!css-loader"
       },
       {
       test: /\.json?/,
       loader: 'json-loader'
       }
   ]
},
  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  devServer: {
    contentBase: __dirname,
    host: "localhost",
    watchContentBase: true,
    port:9081,
    //https: true,

    //for supporting history api fallback
    historyApiFallback: {
      index: '/'
    }
  }
}
module.exports = config;
