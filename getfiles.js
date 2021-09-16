let fs = require('fs');

fs.readdir('.', 'utf8', (e, folders) =>
	folders.filter(v => !v.match(/\./)).map(folder =>
		fs.readdir(folder, 'utf8', (e, data) =>
			fs.writeFile(`${folder}.txt`, data.join('\n'), () =>
				this // it always comes back to it..
			)
		)
	)
);