const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/App.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "output.js"
    },
    // start loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    // end loader
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    }
}