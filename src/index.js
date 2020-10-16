const { resolve } = require("path");

module.exports = function nuxtGoodShare(moduleOptions) {
  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    options: moduleOptions,
    ssr: false,
  });
};

module.exports.meta = require("../package.json");
