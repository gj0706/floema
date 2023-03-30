const path = require("path");
// Copy files and folders in webpack
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";

const dirApp = path.join(__dirname, "app");
// const dirImages = path.join(__dirname, "images");
// const dirVideos = path.join(__dirname, "videos");
const dirShared = path.join(__dirname, "shared");
const dirStyles = path.join(__dirname, "styles");
const dirNode = "node_modules";
module.exports = {
  entry: [path.join(dirApp, "index.js"), path.join(dirStyles, "index.scss")],
  resolve: {
    modules: [dirApp, dirShared, dirStyles, dirNode],
  },
  // entry: "./app/index.js",
  // output: {
  //   path: path.resolve(__dirname, "./public"),
  //   filename: "index_bundle.js",
  // },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./shared",
          to: "",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),

    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin(),
    // new ImageMinimizerPlugin({
    // 	minimizer: {
    // 		options: {
    // 			plugins: [
    // 				["gifsicle", { interlaced: true }],
    // 				["jpegtran", { progressive: true }],
    // 				["optipng", { optimizationLevel: 5 }],
    // 			],
    // 		},
    // 	},
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          { loader: "sass-loader" },
        ],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg|woff2?|fnt|webp)$/,
      //   loader: "file-loader",
      //   options: {
      //     name(file) {
      //       return "[hash].[ext]";
      //     },
      //   },
      // },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|webp|tiff)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name].[hash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "raw-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glslify-loader",
        exclude: /node_modules/,
      },

      // {
      //   test: /\.(jpe?g|g|png|gif|svg|webp)$/i,
      //   use: [
      //     {
      //       loader: ImageMinimizerPlugin.loader,
      //       options: {
      //         severityError: "warning", // Ignore errors on corrupted images
      //         minimizer: {
      //           plugins: ["gifsicle"],
      //         },
      //       },
      //     },
      //   ],
      // },
      // {
      // 	test: /\.(jpe?g|png|gif|svg|webp)$/i,
      // 	use: [
      // 		{
      // 			loader: ImageMinimizerPlugin.loader,
      // 			// enforce: "pre",
      // 			options: {
      // 				minimizer: {
      // 					implementation: ImageMinimizerPlugin.imageminMinify,
      // 					options: {
      // 						plugins: [
      // 							"imagemin-gifsicle",
      // 							"imagemin-mozjpeg",
      // 							"imagemin-pngquant",
      // 							"imagemin-svgo",
      // 						],
      // 					},
      // 				},
      // 			},
      // 		},
      // 	],
      // },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              // ["optipng", { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
};

// const path = require("path");
// const webpack = require("webpack");

// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");

// const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";

// const dirApp = path.join(__dirname, "app");
// const dirShared = path.join(__dirname, "shared");
// const dirStyles = path.join(__dirname, "styles");
// const dirNode = "node_modules";

// module.exports = {
//   entry: [path.join(dirApp, "index.js"), path.join(dirStyles, "index.scss")],

//   resolve: {
//     modules: [dirApp, dirShared, dirStyles, dirNode],
//   },

//   plugins: [
//     new webpack.DefinePlugin({
//       IS_DEVELOPMENT,
//     }),

//     new CopyWebpackPlugin({
//       patterns: [
//         {
//           from: "./shared",
//           to: "",
//         },
//       ],
//     }),

//     new MiniCssExtractPlugin({
//       filename: "[name].css",
//       chunkFilename: "[id].css",
//     }),

//     new ImageMinimizerPlugin({
//       minimizerOptions: {
//         plugins: [
//           ["gifsicle", { interlaced: true }],
//           ["jpegtran", { progressive: true }],
//           ["optipng", { optimizationLevel: 8 }],
//         ],
//       },
//     }),

//     new CleanWebpackPlugin(),
//   ],

//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: {
//           loader: "babel-loader",
//         },
//       },

//       {
//         test: /\.scss$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//               publicPath: "",
//             },
//           },
//           {
//             loader: "css-loader",
//           },
//           {
//             loader: "postcss-loader",
//           },
//           {
//             loader: "sass-loader",
//           },
//         ],
//       },

//       {
//         test: /\.(jpe?g|png|gif|svg|woff2?|fnt|webp)$/,
//         loader: "file-loader",
//         options: {
//           name(file) {
//             return "[hash].[ext]";
//           },
//         },
//       },

//       {
//         test: /\.(jpe?g|png|gif|svg|webp)$/i,
//         use: [
//           {
//             loader: ImageMinimizerPlugin.loader,
//           },
//         ],
//       },

//       {
//         test: /\.(glsl|frag|vert)$/,
//         loader: "raw-loader",
//         exclude: /node_modules/,
//       },

//       {
//         test: /\.(glsl|frag|vert)$/,
//         loader: "glslify-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },

//   optimization: {
//     minimize: true,
//     minimizer: [new TerserPlugin()],
//   },
// };
