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

//	Open a file to be read
const raw_file = fs.createReadStream('file.txt', options_raw);

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
OurDataManipulation.prototype._transform = function (line, encoding, processed) {
	//	Add the data that came in, to the output stream
	this.push(line);

	//	We let the system know that we finished processing the data.
  processed();

}

//	Pipe the data through our custom stream and then pass it to the console.
raw_file.pipe(new OurDataManipulation()).pipe(process.stdout);
