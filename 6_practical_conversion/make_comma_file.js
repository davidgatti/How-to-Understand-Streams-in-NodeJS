//
// Load the modules
//
let fs = require('fs');
let Chance = require('chance');

//
// Instantiate Chance so it can be used
//
let chance = new Chance();

//
//	Options for the file
//
let options = {
	flags: 'w',
	defaultEncoding: 'utf8',
	fd: null,
	mode: 0o666,
	autoClose: true
}

//
//	Execute the function that writes data in to the file.
//
let file = fs.createWriteStream('./comma_file.txt', options);

//
//	Start he creation of the comma separated file
//
fill_the_file(file, true, 10000);

//
//	Function that will write data in to the file.
//
//	file 	<- 	The file to write to
//	ok		<- 	Decide whether you can write or not to the file
//	size	<-	The loop size
//
function fill_the_file(file, ok, size)
{

	//
	//	While the established size is bigger then zero and the buffer
	//	didn't fill up.
	//
	while(size-- && ok)
	{
		let first = chance.first();
		let last = chance.last();
		let email = chance.email({domain: 'example.com'});

		let string = `${first} ${last} <${email}>, `;

		//
		//	Write will set false once there is no more space to write,
		//	meaning in the 'drain' event we need to set the size to + 1,
		//	because write didn't write the data in the fail at the moment
		//	of false.
		//
		ok = file.write(string, 'ascii');

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
		//	Adds a one time listener function for the drain event so we
		//	can be notified when the buffer became empty.
		//
		file.once('drain', function() {

			//
			//	Resume writing
			//
			fill_the_file(file, true, size + 1)

		});
	}
}
