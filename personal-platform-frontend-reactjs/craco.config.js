const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Configure path aliases for all environments
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        mainFields: ["module", "main"],
        alias: {
          ...webpackConfig.resolve.alias,
          "@services": paths.appSrc + "/services",
          "@components": paths.appSrc + "/components",
          "@utils": paths.appSrc + "/utils",
        },
      };

      // Enable production optimizations
      if (env === "production") {
        // Ensure we're using the production mode
        webpackConfig.mode = "production";

        // Configure Terser for better tree shaking
        webpackConfig.optimization.minimizer = [
          new TerserPlugin({
            terserOptions: {
              parse: {
                // We want terser to parse ecma 8 code. However, we don't want it
                // to apply any minification steps that turns valid ecma 5 code
                // into invalid ecma 5 code.
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                drop_console: true,
                pure_funcs: ["console.debug", "console.log", "console.info"],
                pure_getters: true,
                keep_fargs: false,
                unsafe_methods: true,
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
            // Enable parallel processing
            parallel: true,
          }),
        ];

        // Add compression plugin for gzip
        webpackConfig.plugins.push(
          new CompressionPlugin({
            filename: "[path][base].gz",
            algorithm: "gzip",
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
          })
        );

        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          // Ensure we're using proper minimization
          minimize: true,
          // Enable tree shaking
          usedExports: true,
          // Enable module concatenation
          concatenateModules: true,
          // Ensure proper side effects tracking
          sideEffects: true,
          splitChunks: {
            chunks: "all",
            minSize: 20000,
            maxSize: 244000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
              defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
                // Ensure proper ES modules handling
                enforce: true,
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
              },
              // Critical vendors that should be preloaded
              criticalVendors: {
                test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                name: "critical-vendors",
                chunks: "all",
                priority: 20,
                enforce: true,
              },
              // AWS SDK chunks
              aws: {
                test: /[\\/]node_modules[\\/]@aws-sdk[\\/]/,
                name: "aws-sdk",
                chunks: "async",
                priority: 15,
                enforce: true,
              },
              // Separate chunk for Quill with tree shaking enabled
              quill: {
                test: /[\\/]node_modules[\\/]quill[\\/]/,
                name: "quill",
                chunks: "async",
                priority: 10,
                enforce: true,
              },
              // Separate chunk for Tinode
              tinode: {
                test: /[\\/]node_modules[\\/]@Itgalaxy1[\\/]itgalaxychat[\\/]/,
                name: "tinode",
                chunks: "async",
                priority: 10,
                enforce: true,
              },
              // Separate chunk for chat-related modules
              chat: {
                test: /[\\/]src[\\/]components[\\/]Chat/,
                name: "chat",
                chunks: "async",
                priority: 5,
                enforce: true,
              },
              // Common components that are frequently used
              commons: {
                test: /[\\/]src[\\/]components[\\/]/,
                name: "commons",
                chunks: "all",
                minChunks: 2,
                priority: -5,
                enforce: true,
              },
              // Styles
              styles: {
                name: "styles",
                test: /\.css$/,
                chunks: "all",
                enforce: true,
                priority: 20,
              },
            },
          },
          runtimeChunk: {
            name: "runtime",
          },
          moduleIds: "deterministic",
          chunkIds: "deterministic",
        };
      }

      // Add bundle analyzer in analyze mode
      if (process.env.ANALYZE) {
        webpackConfig.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "bundle-report.html",
            openAnalyzer: true,
            generateStatsFile: true,
            statsFilename: "bundle-stats.json",
          })
        );
      }

      return webpackConfig;
    },
  },
};
