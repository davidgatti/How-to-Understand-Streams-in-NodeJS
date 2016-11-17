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
//	Red the first set of the available buffer
//
file.on('readable', function() {

	//
	//	Keep on reading until we get at the end of the file.
	//
	while(chunk = file.read(1))
	{

		//
		//	Store the amount of bytes red
		//
		size += chunk.length;

		//
		//	Display how many bytes did we get
		//
		console.log(`Received ${size} bytes of data.`);
	}

});