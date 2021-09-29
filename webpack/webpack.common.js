const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const cssLoaders = (compile) => {
	const loaders = ["css-loader"];

	if (compile) {
		loaders.push(compile);
	}

	return loaders;
};

module.exports = {
	entry: path.resolve(__dirname, "..", "./src/index.tsx"),
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.css$/,
				use: cssLoaders(),
			},
			{
				test: /\.s[ac]ss$/i,
				use: cssLoaders("sass-loader"),
			},
			{
				test: /\.(png|svg|jpg|jpeg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "..", "./build"),
		filename: "bundle.js",
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "..", "./src/index.html"),
		}),
	],
	//stats: "errors-only",
};
