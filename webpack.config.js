var path = require("path"),
    StatsPlugin = require("stats-webpack-plugin");

var devServerPort = process.env.WEBPACK_DEV_SERVER_PORT,
    devServerHost = process.env.WEBPACK_DEV_SERVER_HOST,
    publicPath = process.env.WEBPACK_PUBLIC_PATH;

var config = {
  entry: './apps/web/assets/javascripts/index.js',
  output: {
    path: path.join(__dirname, "public"),
    filename: "scripts.bundle.js"
  },
   module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new StatsPlugin("webpack_manifest.json")
  ]
};

if (process.env.INBUILT_WEBPACK_DEV_SERVER) {
  config.devServer = {
    port: devServerPort,
    headers: { "Access-Control-Allow-Origin": "*" },

  };
  config.output.publicPath = "//" + devServerHost + ":" + devServerPort + "/";
}

module.exports = config;