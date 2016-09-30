const fs = require("fs");
const browserify = require("browserify");
const path = require("path");
const mold = require("mold-source-map");
const exorcist = require("exorcist");
var libs = [
	"jquery",
	"lodash",
	"react",
	"react-dom",
	"classnames",
	"react-router"
];
var mode = process.argv[2];
if(mode == "libs")
{
	browserify({
		paths: ["./node_modules"],
		debug: false
	}).require(libs).bundle().pipe(fs.createWriteStream("./dist/libs.js"));
}
else
{
	browserify({
		entries: ["./bin/js/index.js"],
		paths: ['./bin/js','./node_modules'],
		debug: true
	})
	.external(libs).bundle()
	.pipe(mold.transformSourcesRelativeTo(path.join(process.cwd(), "..")))
	.pipe(exorcist('./dist/textrade.bundle.js.map'))
	.pipe(fs.createWriteStream("./dist/textrade.bundle.js"));
}
