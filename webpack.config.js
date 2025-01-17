const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path : path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        }],
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: path.join(__dirname, 'public'),
    },
}
