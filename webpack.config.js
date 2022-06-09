// require :: 외부 라이브러리 불러오는 함수
const PATH = require("path");

const HTML_WEBPACK_PLUGIN = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/core/index.js",
    output: {
        filename: "[name].[chunkhash].js",
        path: PATH.resolve(__dirname, "dist/js"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    }
                },
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTML_WEBPACK_PLUGIN({
            template: "./src/template/index.html",
        }),
    ],
    devtool: "eval-cheap-source-map",
    devServer: {
        port: 9000,
        hot: true,
    }
}