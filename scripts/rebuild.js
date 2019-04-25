const rewire = require("rewire");
const defaults = rewire("react-scripts/scripts/build.js");
const config = defaults.__get__("config");

// Consolidate chunk files instead
config.optimization.splitChunks = {
  cacheGroups: {
    default: false
  }
};
config.optimization.runtimeChunk = false;

config.output.filename = "static/js/main.js";

config.plugins[5].options.filename = "static/css/main.css";
