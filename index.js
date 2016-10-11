var fs = require('fs');

var csvFiles = [];

process.argv.forEach(function (val, index, array) {
  if(index > 1) {
  	csvFiles.push(array[index]);
  }
}); 

function newFile() {
	fs.writeFile('mergd_file.csv', '', 'utf8');
}

function ReadAppend(file, appendFile) {
	fs.readFile(appendFile, (err, data) => {
	  if (err) throw err;
	  console.log('File was read');
	  fs.appendFile(file, data, (err) => {
	    if (err) throw err;
	    console.log('The "data to append" was appended to file!');
	  });
	});
}

var file = 'mergd_file.csv';

csvFiles.forEach(function(val, index, array) {
	newFile();
	var fileName = array[index];
	appendFile = fileName;
	ReadAppend(file, appendFile);
});