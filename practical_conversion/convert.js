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
let raw_file = fs.createReadStream('./comma_file.txt', options_raw);
let to_compressed_file = fs.createWriteStream('./semicolon_file.txt', options_compressed);

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

	// 2C > 3B


	for (let i = 0; i < line.length ; i++)
	{
		if(line[i] == 44)
		{
			line[i] = 59
		}
	}


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