let fs = require('fs');
let stream = require('stream');
var Transform = require("stream").Transform;
var util = require("util");

//
//	Inherit Transform
//
util.inherits(OurDataManipulation, Transform);

//
//	Options
//
let options_raw = {
	flags: 'r',
	defaultEncoding: 'utf8',
	fd: null,
	mode: 0o666,
	autoClose: true
}

let options_compressed = {
	flags: 'w',
	defaultEncoding: 'utf8',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//
//	Open a file to be red
//
let raw_file = fs.createReadStream('./file.txt', options_raw);
let to_compressed_file = fs.createWriteStream('./file.gz', options_compressed);

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
//	Create our custom Transform where we are going to process
//	the data that comes in.
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
//	Pipe
//
raw_file.pipe(new OurDataManipulation()).pipe(to_compressed_file);