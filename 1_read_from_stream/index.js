//
// Load the modules
//
let fs = require('fs');

//
//	Options for the file
//
let options = {
	flags: 'r',
	defaultEncoding: 'ascii',
	fd: null,
	autoClose: true
}

//
//	Open a file to be read
//
let file = fs.createReadStream('./file.txt', options);

//
//	Create a variable that will hold the amount of bytes read
//
let size = 0;

//
//	Red the first set of the available buffer
//
file.on('readable', function() {

	console.log('-> Data available to be read')

	//
	//	Keep on reading until we get at the end of the file.
	//
	while(chunk = file.read(2000))
	{

		//
		//	Store the amount of bytes read
		//
		size += chunk.length;

		//
		//	Display how many bytes did we get
		//
		console.log(`Received ${size/1000} bytes of data.`);
	}

});
