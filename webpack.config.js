// module.exports = {
//     entry: [
//         './app/index.js'
//     ],
//     output: {
//         path: __dirname + "/public",
//         filename: 'bundle.js'
//     },
//     module: {
//         loader: [{
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loaders: 'babel-loader ',
//             query: {
//                 presets: ['react', 'es2015']
//             }
//         }]
//     }
// }

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};