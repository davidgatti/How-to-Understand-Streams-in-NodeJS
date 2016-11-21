let fs = require('fs');
let util = require("util");
let stream = require('stream');
let Transform = require("stream").Transform;

//
//	Inherit Transform
//
util.inherits(OurStream, Transform);

//
//	Options for the file
//
let options_raw = {
	flags: 'r',
	defaultEncoding: 'utf8',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//
//	Options for the file
//
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
function OurStream () {

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
OurStream.prototype._transform = function (buffer, encoding, callback) {

	//
	//	Loop over the buffer looking for ',' and replacing it with ';', which
	//	in ASCII ',' is 44 and ';' is 59
	//
	for (let i = 0; i < buffer.length ; i++)
	{
		if(buffer[i] == 44)
		{
			buffer[i] = 59
		}
	}

	//
	//	Add the data that came in, to the output stream
	//
	this.push(buffer);

	//
	//	Pass the chunk of processed data to the next potential stream
	//
    callback();

}

//
//	Pipe
//
raw_file
	.pipe(new OurStream())
	.pipe(to_compressed_file);
