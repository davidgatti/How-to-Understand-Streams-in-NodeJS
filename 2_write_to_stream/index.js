let fs = require('fs');

let options = {
	flags: 'w',
	defaultEncoding: 'utf8',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//
//	Create a file and set on it some good options
//
let file = fs.createWriteStream('./x_file.txt', options);

//
//	Execute the function that writes data in to the file.
//
fill_the_file(file, true, 100000);

//
//	Function that will write data in to the file.
//
function fill_the_file(file, ok, size)
{

	//
	//	While the established size is bigger then zero and the buffer
	//	didn't fill up.
	//
	while(size-- && ok)
	{
		//
		//	Write will set false once there is no more space to write,
		//	meaning in the 'drain' event we need to set the size to + 1,
		//	because write didn't write the data in the fail at the moment
		//	of false.
		//
		ok = file.write("x", "utf-8");

		//
		//	Emmit when there is nothing more to write.
		//
		if(size === 0)
		{
			file.end();
		}
	}

	//
	//	If we didn't finish writing, we get hear because the buffer filled up,
	//	and the .write() method notified us to resume writing after the
	//	'drain' event is emitted.
	//
	if(size > 0)
	{
		//
		//	Wait for the event
		//
		file.once('drain', function() {

			//
			//	Resume writing
			//
			fill_the_file(file, true, size + 1)

		});
	}
}