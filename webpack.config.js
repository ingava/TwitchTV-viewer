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
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};