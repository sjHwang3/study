// require :: 외부 라이브러리 불러오는 함수
const PATH = require("path");

const HTML_WEBPACK_PLUGIN = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CLEAN_WEBPACK_PLUGIN = CleanWebpackPlugin;

module.exports = {
    entry: "./src/core/index.tsx",
    output: {
        filename: "[name].[chunkhash].js",
        path: PATH.resolve(__dirname, "dist/js"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "@": PATH.resolve(__dirname, "../src/"),
        },
    },
    module: {
        rules: [
            {
                //test: /\.js$/,
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        // @babel/preset-typescript가 없으면 .tsx 변환 X
                        presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                    }
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new CLEAN_WEBPACK_PLUGIN({
            cleanStaleWebpackAssets: false,
        }),
        new HTML_WEBPACK_PLUGIN({
            template: "./src/template/index.html",
        }),
    ],
}
