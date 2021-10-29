const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    stats: 'minimal',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            /*Choose only one of the following two: if you're using 
            plain CSS, use the first one, and if you're using a
            preprocessor, in this case SASS, use the second one*/
            // {
            //   test: /\.css$/,
            //   use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ]
    }
}