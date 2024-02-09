const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path : path.join(__dirname, '/dist'),
        __filename : 'bundle.js'
    },
    devServer:{
        port : 3000
    },
    module:{
        rules:[]
    },
    plugins :[
        new HtmlWebpackPlugin({
            template : './src/public/index.html'
        })
    ]
}