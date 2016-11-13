let fs = require('fs');
let zlib = require('zlib');

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
//	Compressor
//
let gz = zlib.createGzip();

//
//	Pipe
//
raw_file.pipe(gz).pipe(to_compressed_file);