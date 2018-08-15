const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        // use: [
        //   {
        //     loader: "style-loader"
        //   },
        //   {
        //     loader: "css-loader",
        //     // options: {
        //     //   modules: true,
        //     //   importLoaders: 1,
        //     //   localIdentName: "[name]_[local]_[hash:base64]",
        //     //   sourceMap: true,
        //     //   minimize: true
        //     // }
        //   }
        // ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
            },
        ]
      },
    ]
  },
  plugins: [htmlWebpackPlugin]
};
