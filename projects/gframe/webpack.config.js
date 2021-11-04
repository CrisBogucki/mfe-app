const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "gframe",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        "@angular/core": {singleton: true, strictVersion: true},
        "@angular/common": {singleton: true, strictVersion: true},
        "@angular/common/http": {singleton: true, strictVersion: true},
        "@angular/router": {singleton: true, strictVersion: true},
      }
    })
  ],
};
