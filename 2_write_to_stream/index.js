// Load the modules
const fs = require('fs');

// Options for the file
const options = {
	flags: 'w',
	defaultEncoding: 'ascii',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//	Create a file and set on it some good options
const file = fs.createWriteStream('x_file.txt', options);
const data_size = 100000;

//	Execute the function that writes data in to the file
fill_the_file(file, data_size);


//	Function that will write data in to the file
function fill_the_file(file, size)
{
	/*
    While the established size is bigger than zero and the buffer
		didn't fill up.
  */
  let ok = true;

	while(size-- && ok)
	{
		/*
		  'Write' will return false once there is no more space to write,
			meaning in the 'drain' event we need to set the size to + 1,
			because write didn't write the data in the fail at the moment
			of false
		*/
		ok = file.write("x", "ascii");

		//	Emmit when there is nothing more to write
		if(size === 0)
		{
			file.end();
		}
	}

	/*
		If we didn't finish writing, we get here because the buffer filled up,
		and the write() method notified us to resume writing after the
		'drain' event is emitted.
	*/
	if(size > 0)
	{
		/*
			Adds a one time listener function for the drain event so we
			can be notified when the buffer became empty and resume the
      writing from that point
		*/
		file.once('drain', function() {
      //Resume writing
      fill_the_file(file, size + 1);
    });
	}
}
