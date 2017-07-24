// Load the modules
const fs = require('fs');
const util = require('util');
const stream = require('stream');
const Transform = stream.Transform;

//	Options for the file
const options_raw = {
	flags: 'r',
	defaultEncoding: 'ascii',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//	Options for the compressed file
const options_compressed = {
	flags: 'w',
	defaultEncoding: 'ascii',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//	Open a file to be red
const raw_file = fs.createReadStream('x_file.txt', options_raw);
const to_compressed_file = fs.createWriteStream('k_file.txt', options_compressed);

//	Inherit Transform
util.inherits(OurDataManipulation, Transform);

//	Create our custom stream processor
function OurDataManipulation () {
	// invoke Transform constructor
    Transform.call(this);
}

/*
	Create our custom stream that in this case doesn't do anything, it just
	shows what is the bare minimum needed to make a stream from scratch and
	pass the data to the next pipe.
*/
OurDataManipulation.prototype._transform = function (buffer, encoding, processed) {
	//	Convert the buffer in to a string
	const x_string = buffer.toString();

  /*
    Split the string based on each char which will return an array,
    then map each of them with 'k' letter
    and then join again them to make an string of 'k' letters
  */
  const k_string = x_string.split('').map(_ => 'k').join('');

	//	Add the data that came in, to the output stream
	this.push(k_string);

	//	We let system know that we finished processing the data.
  processed();

}

//	Pipe
raw_file
	.pipe(new OurDataManipulation())
	.pipe(to_compressed_file);
