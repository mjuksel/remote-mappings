let fs = require('fs');

['Effects', 'Instruments', 'Players', 'Utilities'].map(category =>
	fs.readdir(category, 'utf8', (error, file) =>
		fs.writeFile(`${category}.txt`, file.join('\n'), () => this)
	)
);