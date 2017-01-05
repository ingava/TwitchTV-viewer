module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + "/public",
        filename: 'bundle.js'
    },
    module: {
        loader: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: 'babel-loader'
        }]
    }
}