const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

module.exports={
  entry:'./src/js/main.js',
  output:{
    //publicPath:'./dist/',
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.(jpg|png|gif)$/,use:{
        loader: 'url-loader',
        options:{
          limit: 20480
        }
      }}
    ]
  },
  devServer:{
    contentBase:'dist/'
  },
  plugins:[
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
