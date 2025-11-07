const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function cssLoaders(extra = null) {
    const loaders = [
        (new MiniCssExtractPlugin()).loader,
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
            },
        }
    ];

    if (extra) loaders.push(extra);

    return loaders;
}

module.exports = {
    entry: './test/main.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx|jsx)?$/,
                exclude: [/node_modules/, /src/],
                loader: "ts-loader",
                options: { configFile: "tsconfig.json" }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
          test: /\.s[ac]ss$/, use: [...cssLoaders({
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true,// Отключает предупреждения о депрекации
                implementation: require('sass'),
              }
            }
          })]
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
         alias: {
                '@rocet': path.resolve(__dirname, 'dist/src'),
            }
    },
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // library: 'EditorJS',
        // libraryTarget: 'umd',
        // globalObject: 'this'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './test/index.html'
        })
    ],
    devServer: {
        static: './web',
        port: 3000,
        open: true
    },
};