module.exports = {

    module: {
        rules: [
            {
                // queremos que sea procesado por babel cada js o mjs
                test: /\.m?js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}