const { merge } = require("webpack-merge");
const WEBPACK_CMMN = require("./webpack.config.cmmn");

module.exports = merge(
    WEBPACK_CMMN, {
        mode: "development",
        devtool: "eval-cheap-source-map",
        devServer: {
            port: 9000,
            hot: true,
            open: true,
        },
    }
);
