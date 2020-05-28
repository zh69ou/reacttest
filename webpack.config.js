const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:{
		common:['react','react-dom','react-router-dom','axios'],
		// pub:[path.resolve(__dirname, 'assets/scss/bootstrap.scss')],
		index:'./src/index.tsx'
	},
	devServer:{
		contentBase:path.join(__dirname,'dist'),
		historyApiFallback:{
			rewrites:[
				{ from: /^\/$/,to: '/index.html' }
			]
		},
		compress:true,
		port:8080
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		publicPath:"/",
		filename:'js/[name].js'
	},
	plugins:[
		new MiniCssExtractPlugin({
			filename:"css/[name].css",
			chunkFilename:"css/[name].css",
			ignoreOrder: false
		}),
		new HtmlWebpackPlugin({
			filename:"index.html",
			template:"./assets/html/index.html",
			chunks: ['index','pub','common'],
			inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: true
            }
		})
	],
	devtool: "source-map",
	resolve:{
		alias:{
			'~': path.resolve('src'),
		},
		extensions: [".ts", ".tsx",".js",".scss",".sass"]
	},
	module:{
		rules:[
			{
				test: /\.(png|svg|jpg|gif|ico|woff|woff2|eot|ttf|otf)$/,
				use:[{
					loader:'file-loader',
					options:{
						name:'[name].[ext]',
						outputPath:'assets/'
					}
				}]
			},
			{
				test:/\.(sa|sc|c)ss$/i,
				use:[
          MiniCssExtractPlugin.loader,
					// 'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
		    test: /\.html$/,
		    use: [{
		      loader: 'html-loader',
		      options: {
		        minimize: true
		      }
		    }]
		  },
			{
				test:/\.ts(x?)$/,
				exclude: /node_modules/,
				use:[{
					loader:"ts-loader"
				}]
			},
			// {
			// 	enforce:"pre",
			// 	test:/\.js$/,
			// 	loader:"source-map-loader"
			// },
      {
        test: /\.js$/,
        use:{
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-env'],
            plugins: [
              ["@babel/plugin-transform-runtime",{
                  "absoluteRuntime": false,
                  "corejs": false,
                  "helpers": false,
                  "regenerator": true,
                  "useESModules": false
                }
              ]
            ],
            sourceType: 'unambiguous',
            compact: false
          }
        }
      }
		]
	}
}