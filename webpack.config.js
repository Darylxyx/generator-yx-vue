var webpack = require('webpack'),
	path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: resolve('dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'@': resolve('src'),
		},
	},
	module: {
		loaders: [
			{
				test: /\.js(x)*$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'stage-0']
				}
			},
			{
				test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'img/[name].[hash:7].text',
				},
			}
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
        	test: /\.vue$/, 
        	options: {
        		babel: {
			      presets: ['es2015', 'stage-0']
			    }
         	}
       	}),
		new webpack.DllReferencePlugin({
			context: __dirname,
			manifest: require('./dist/manifest.json')
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development'), //development & production
				'PUBLIC_PATH': JSON.stringify('http://127.0.0.1')
			}
		})
	]
}
