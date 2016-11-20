# How to manipulate a stream in NodeJS

In this folder you'll find the end result of what we learned in this article. Hear you'll find two main files:

- **make_comma_file.js**: this file uses the Chance module to create a txt file of a certain size (around 300KB). The file will be filled with the following data: `Name Last Name <email@exampl.ecom>, `. WHere we are using our previous knowledge to write in to a file some content using streams.
- **converter.js**: this file is the interesting one, where we are going to take the file created using `make_comma_file.js`, and create a new one with new content. We are going to change the `,` to `;`, so the end result will look like this: `Name Last Name <email@exampl.ecom>; `.

# The better approach

I told you in the previous example that the approach used to manipulate the data is not the right one (very inefficient approach). In the `converter.js` file you'll see the following chunk of code that manipulates the data in a very efficient way. We are going to work directly with the buffer (binary data).

```javascript
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
```

Not only the code is shorter, this is not the point, the most important aspect is the fact that we are not converting the binary blob in to ascii, we are editing the data straight within the buffer.

# How to Run the Code

To generate the sample file, run `node make_comma_file.js`. Once you have the `comma_file.txt`, run `node convert.js` to get a new file `semicolon_file.txt` with the replaced data.