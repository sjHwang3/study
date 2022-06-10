const { merge } = require("webpack-merge");
const WEBPACK_CMMN = require("./webpack.config.cmmn");

module.exports = merge(
    WEBPACK_CMMN,{
        mode: "production",
    }
);
