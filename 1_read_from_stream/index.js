/* Load the modules */
const fs = require('fs');

/*	Options for the file */
const options = {
	flags: 'r',
	defaultEncoding: 'ascii',
	fd: null,
	autoClose: true
}

/*	Open a file to be read */
const file = fs.createReadStream('file.txt', options);

/*	Create a variable that will hold the amount of bytes read */
let size = 0;

/*	Read the first set of the available buffer */
file.on('readable', function() {
	console.log('-> Data available to be read:')
	/*	Keep on reading until we reach at the end of the buffer. */
	while((chunk = file.read(2000)) != null)
	{
		/*	Store the amount of bytes read */
		size += chunk.length;

		/*	Display how many bytes we got*/
		console.log(`Received ${size/1000} bytes of data.`);
	}
});
