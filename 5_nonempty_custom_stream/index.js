//
// Load the modules
//
let fs = require('fs');
let util = require('util');
let stream = require('stream');
let Transform = stream.Transform;

//
//	Inherit Transform
//
util.inherits(OurDataManipulation, Transform);

//
//	Options for the file
//
let options_raw = {
	flags: 'r',
	defaultEncoding: 'ascii',
	fd: null,
	mode: 0o666,
	autoClose: true
}

let options_compressed = {
	flags: 'w',
	defaultEncoding: 'ascii',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//
//	Open a file to be read
//
let raw_file = fs.createReadStream('./x_file.txt', options_raw);
let to_compressed_file = fs.createWriteStream('./k_file.txt', options_compressed);

//
//	Create our custom stream processor
//
function OurDataManipulation () {

	//
	// invoke Transform constructor
	//
    Transform.call(this);
}

//
//	Create our custom stream that in this case doesn't do anything, it just
//	shows what is the bare minimum needed to make a stream from scratch and
//	pass the data to the next pipe.
//
OurDataManipulation.prototype._transform = function (buffer, encoding, processed) {

	//
	//	Convert the buffer in to a string
	//
	let x_string = buffer.toString();

	//
	//	Split the string based on each char and store the result in to an array
	//
	let array = x_string.split('');

	//
	//	Loop over the array and replace each X with a K
	//
	array.forEach(function(data, index) {

		array[index] = 'k';

	});

	//
	//	Join the converted array back in to a string.
	//
	let k_string = array.join('');

	//
	//	Add the data that came in, to the output stream
	//
	this.push(k_string);

	//
	//	We let system know that we finished processing the data.
	//
    processed();

}

//
//	Pipe
//
raw_file
	.pipe(new OurDataManipulation())
	.pipe(to_compressed_file);
