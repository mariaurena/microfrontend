const { VueLoaderPlugin } = require('vue-loader')

module.exports = {

    // --- configuracion para vue ---

    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            // configuracion vue
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use: [
                    { loader: 'file-loader'}
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss|\.css$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                // queremos que sea procesado por babel cada js o mjs
                test: /\.m?js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },

    plugins: [new VueLoaderPlugin()]
}