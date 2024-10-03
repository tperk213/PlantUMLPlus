const fs = require('fs');


const fileName = 'testNumIn.wsd';
const outFile = 'testNumOut.wsd';
const numberIdentifier = '###NumI';



//readfile
function run() {
	fs.readFile(fileName, 'utf8', (err, data) => {
		//error
		if (err) {
			console.error(`Error reading file $(fileName)`);
			return
		}
		var counter = 0;
		var hardStop = 0;

		while (data.includes(numberIdentifier) && hardStop < 5) {
			console.log("data is " + data);
			console.log("counter is " + counter);
			data = data.replace(numberIdentifier, "1." + counter);
			counter++
			hardStop++
		}

		fs.writeFile(outFile, data, 'utf8', (err) => {
			if (err) {
				console.error(`Error writing file ${outFile}`);
				return
			}
			console.log(`Writing to file`);
		});
	});
}
run();
