const path = require("path");
const mode = process.NODE_ENV || "development";

module.exports = {
    mode,
    watch: mode === "development",
    watchOptions: {
		ignored: [
			"./index.js",
			"./package.json",
			"./package-lock.json",
			"**/modules",
			"**/node_modules",
		],
	},
	stats: "errors-only",
    devtool: "inline-source-map",
    entry: {
        app: path.resolve(__dirname, "./src/app.js"),
        index: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "./public/assets/bundle/"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
				test: /\.s?[ac]ss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
        ]
    }
};