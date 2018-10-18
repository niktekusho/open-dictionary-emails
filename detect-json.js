const {basename, resolve} = require('path');
const {readFile} = require('fs');

function detectJSON(file, cb) {
	if (file.isNull() || !file.path) {
		// nothing to do
		cb({});
	}

	const {path} = file;
	const baseFileName = basename(path, '.template.ejs');
	const configFile = `${baseFileName}.json`;
	const configPath = resolve(path, '..', '..', 'testing', configFile);

	readFile(configPath, {encoding: 'utf8'}, (err, data) => {
		if (err) {
			console.error(err);
			throw err;
		}
		const json = JSON.parse(data);
		console.debug(json);
		cb(null, json);
	});
};

module.exports = detectJSON;
