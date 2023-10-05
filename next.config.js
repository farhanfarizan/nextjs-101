const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

const nextConfig = {
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
};

module.exports = nextConfig;
