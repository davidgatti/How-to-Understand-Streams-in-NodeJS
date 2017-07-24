const fs = require('fs');
const util = require('util');
const stream = require('stream');
const Transform = stream.Transform;

//	Options for the file to be read
const read_file_options = {
	flags: 'r',
	defaultEncoding: 'utf8',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//	Options for the file to be written
const write_file_options = {
	flags: 'w',
	defaultEncoding: 'utf8',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//	Open a file to be read
let reader_file = fs.createReadStream('comma_file.txt', read_file_options);
let writer_file = fs.createWriteStream('semicolon_file.txt', write_file_options);


//	Inherit Transform
util.inherits(OurStream, Transform);

//	Create our custom stream processor
function OurStream () {
	// invoke Transform constructor
    Transform.call(this);
}

/*
	Create our custom stream that in this case doesn't do anything, it just
	shows what is the bare minimum needed to make a stream from scratch and
	pass the data to the next pipe.
*/
OurStream.prototype._transform = function (buffer, encoding, callback) {

	/*
		Loop over the buffer looking for ',' and replacing it with ';', which
		in ASCII ',' is 44 and ';' is 59
	*/
  const len = buffer.length;
	for (let i = 0; i < len ; i++)
	{
		if(buffer[i] == 44)
		{
			buffer[i] = 59
		}
	}

	//	Add the data that came in, to the output stream
	this.push(buffer);

	//	Pass the chunk of processed data to the next potential stream
  callback();

}

//	Pipe
reader_file
	.pipe(new OurStream())
	.pipe(writer_file);
