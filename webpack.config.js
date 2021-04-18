const config = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: /node_modules/,
        }, ],
    },
    target: "webworker", // or 'node' or 'node-webkit'
    externals: {
        fs: "commonjs fs",
        path: "commonjs path"
    }
};
module.exports = config;