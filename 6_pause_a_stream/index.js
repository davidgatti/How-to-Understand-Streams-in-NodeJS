let fs = require('fs');

let options = {
	flags: 'r',
	defaultEncoding: 'utf8',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//
//	Open a file to be red
//
let file = fs.createReadStream('./file.txt', options);

//
//	Create a variable that will hold the amount of bytes red
//
let size = 0;

//
//	React every time there is new data
//
file.on('data', function(chunk) {

	console.log(`Received ${chunk.length} bytes of data.`);

	//
	//	Pause the data flow
	//
	file.pause();

	console.log('There will be no additional data for 1 second.');

	//
	//	Set a timer that will resume data read after a specific amount of time.
	//
	setTimeout(function() {

		console.log('Now data will start flowing again.');

		file.resume();

	}, 2000);

});