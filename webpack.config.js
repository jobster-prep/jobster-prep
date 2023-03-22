import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: process.env.NODE_ENV,
  entry: ['./src/client/index.tsx'],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
    assetModuleFilename: '[name][ext]',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000/',
    },
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {targets: 'defaults'}],
              ['@babel/preset-react', {targets: 'defaults'}],
            ],
          },
        },
      },
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {},
        },
      },
      {
        test: /.(css|s[ac]ss)$/,
        //        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: './index.html',
    }),
  ],
};
