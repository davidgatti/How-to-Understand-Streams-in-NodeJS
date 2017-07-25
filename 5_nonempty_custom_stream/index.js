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
let read_file_options = {
	flags: 'r',
	defaultEncoding: 'ascii',
	fd: null,
	mode: 0o666,
	autoClose: true
}

let write_file_options = {
	flags: 'w',
	defaultEncoding: 'ascii',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//
//	Open a file to be read
//
let reader_file = fs.createReadStream('./x_file.txt', read_file_options);
let writer_file = fs.createWriteStream('./k_file.txt', write_file_options);

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
reader_file
	.pipe(new OurDataManipulation())
	.pipe(writer_file);
