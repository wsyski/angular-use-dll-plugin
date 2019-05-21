var webpack = require("webpack")
var path = require("path")

module.exports = {
    mode: "production",
    // context: __dirname,
    // resolve: {
    //     extensions: [".js", ".jsx"]
    // },
    entry: {
        angular: [
            "@angular/core", 
            "@angular/common", 
            "@angular/router", 
            "@angular/platform-browser", 
            "@angular/platform-browser-dynamic", 
            "rxjs", 
            "zone.js", 
            "core-js"
        ],
        // ui: []
    },
    output: {
        path: path.join(__dirname, "./src/dll"),
        filename: "[name].dll.js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "./src/dll/", "[name]-manifest.json"),
            name: "[name]"
        })
    ]
};