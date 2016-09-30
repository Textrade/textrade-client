module.exports = function () {
	let targets = {
		index_html: { flatten: true, cwd: 'resources/', src: 'index.html', dest: 'dist/' },
		css: { flatten: true, cwd: 'resources/', src: 'css/*.css', dest: 'dist/css/' },
		/*img: { flatten: true, cwd: 'resources/', src: 'img/*.*', dest: 'dist/img' },
		fonts: { flatten: true, cwd: 'resources/', src: 'css/fonts/*.ttf', dest: 'dist/fonts' }*/
	};
	let fse = require("fs-extra");
	let glob = require("glob");
	let path = require("path");
	let minimist = require('minimist');
	let argv = minimist(process.argv.slice(2));
	let target_names =Object.keys(targets);

	function copy_target(target) {
		glob(target.src, { cwd: target.cwd }, (err, matches) => {
			matches.forEach((match) => {
				let dest = path.join(target.dest, target.flatten ? path.basename(match) : match);
				if (argv.v)
					console.log(path.join(target.cwd, match), dest);
				fse.copySync(path.join(target.cwd, match), dest);
			});
		});
	}

	for (let target_name of target_names) {
		if (!targets.hasOwnProperty(target_name)) {
			console.error(`No such copy target '${target_name}'`, targets);
			process.exit(-1);
		}
		else {
			copy_target(targets[target_name]);
		}
	}
};
