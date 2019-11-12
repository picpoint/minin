const fs = require('fs');
const path = require('path');
const moduleObj = require('../modules/obj');

// fs.mkdir(path.join(__dirname, 'tstfolder'), (err) => {
//   if(err) {
// 		console.log(err.message);
// 	} else {
// 		console.log('folder create is successfully');
// 	}
// });



fs.writeFile(path.join(__dirname, 'tstfolder', '000.txt'), moduleObj.truobj.name, (err) => {
	if(err) {
		throw new Error(`file is exists`);
	} else {
		console.log('file is create');

		fs.appendFile(path.join(__dirname, 'tstfolder', '000.txt'), moduleObj.truobj.age, (err) => {
			if(err) {
				throw new Error('ERR TO UPDATE FILE');
			} else {
				fs.readFile(path.join(__dirname, 'tstfolder', '000.txt'), (err, data) => {
					if(err) {
						throw new Error('err to read');
					} else {
						console.log(data.toString());
					}
				});
			}
		});
	}
});

