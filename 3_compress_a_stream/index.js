// Load the modules
const fs = require('fs');
const zlib = require('zlib');

//	Options for the file
const options_raw = {
	flags: 'r',
	defaultEncoding: 'ascii',
	fd: null,
	mode: 0o666,
	autoClose: true
}

const options_compressed = {
	flags: 'w',
	defaultEncoding: 'ascii',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//	Open a file to be read
const raw_file = fs.createReadStream('file.txt', options_raw);

//	Create a new file which will contain the compressed data
const to_compressed_file = fs.createWriteStream('file.txt.gz', options_compressed);

//	Compressor
const gz = zlib.createGzip();

//	Pipe
raw_file
	.pipe(gz)
	.pipe(to_compressed_file);
