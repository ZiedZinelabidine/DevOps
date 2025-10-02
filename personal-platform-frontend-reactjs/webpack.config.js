const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].chunk.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@services": path.resolve(__dirname, "src/services"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: [
              "console.log",
              "console.info",
              "console.debug",
              "console.warn",
            ],
            passes: 3,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            );

            if (!packageName) return "vendors";

            const name = packageName[1];
            if (name.startsWith("@")) {
              const parts = name.split("/");
              return `vendor.${parts[0].replace("@", "")}.${parts[1]}`;
            }

            return `vendor.${name}`;
          },
        },
        // Specific chunks for large dependencies
        aws: {
          test: /[\\/]node_modules[\\/]@aws-sdk[\\/]/,
          name: "aws-sdk",
          chunks: "async",
          priority: 20,
          enforce: true,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react",
          chunks: "all",
          priority: 40,
          enforce: true,
        },
        bootstrap: {
          test: /[\\/]node_modules[\\/](bootstrap|react-bootstrap)[\\/]/,
          name: "bootstrap",
          chunks: "async",
          priority: 30,
          enforce: true,
        },
        redux: {
          test: /[\\/]node_modules[\\/](@reduxjs|redux)[\\/]/,
          name: "redux",
          chunks: "all",
          priority: 30,
          enforce: true,
        },
        // Common chunks
        commons: {
          name: "commons",
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
    runtimeChunk: {
      name: "runtime",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                  useBuiltIns: "usage",
                  corejs: 3,
                  targets: "> 0.25%, not dead",
                },
              ],
              "@babel/preset-react",
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
              "babel-plugin-transform-react-remove-prop-types",
              process.env.NODE_ENV === "production" && [
                "transform-react-remove-prop-types",
                {
                  removeImport: true,
                  ignoreFilenames: ["node_modules"],
                },
              ],
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
              modules: {
                auto: true,
                localIdentName: "[hash:base64]",
              },
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
      // Critical dependency chunks that should be loaded first
      chunks: ["runtime", "react", "redux", "commons", "main"],
      chunksSortMode: "manual",
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    // Bundle Analyzer (only in analyze mode)
    process.env.ANALYZE &&
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: "bundle-report.html",
        openAnalyzer: true,
        generateStatsFile: true,
        statsFilename: "bundle-stats.json",
      }),
  ].filter(Boolean),
  performance: {
    hints: "warning",
    // More strict performance budgets
    maxEntrypointSize: 250000, // 250kb
    maxAssetSize: 250000, // 250kb
    assetFilter: function (assetFilename) {
      // Don't check node_modules vendor chunks
      return !/(vendor|aws-sdk)/.test(assetFilename);
    },
  },
  stats: {
    colors: true,
    chunks: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },
};
