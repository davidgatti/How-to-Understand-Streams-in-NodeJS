//
// Load the modules
//
let fs = require('fs');
let zlib = require('zlib');

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
let raw_file = fs.createReadStream('./file.txt', options_raw);

//
//	Create a new file which will contain the compressed data
//
let to_compressed_file = fs.createWriteStream('./file.gz', options_compressed);

//
//	Compressor
//
let gz = zlib.createGzip();

//
//	Pipe
//
raw_file
	.pipe(gz)
	.pipe(to_compressed_file);
