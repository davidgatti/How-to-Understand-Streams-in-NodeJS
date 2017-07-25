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
let options = {
	flags: 'r',
	defaultEncoding: 'ascii',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//
//	Open a file to be read
//
let raw_file = fs.createReadStream('./file.txt', options);

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
OurDataManipulation.prototype._transform = function (line, encoding, processed) {

	//
	//	Add the data that came in, to the output stream
	//
	this.push(line);

	//
	//	We let system know that we finished processing the data.
	//
  processed();

}

//
//	Pipe the data through our custom stream and then pass it to the console.
//
raw_file.pipe(new OurDataManipulation()).pipe(process.stdout);
