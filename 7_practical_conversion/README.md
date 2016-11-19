# How to manipulate a stream in NodeJS

In this folder you'll find the end result of what we learned in this article. Hear you'll find two main files:

- **make_1g.js**: this file uses the Chance module to create a txt file of a certain size. The file will be filled with the following data: `Name Last Name <email@exampl.ecom>, `.
- **converter.js**: this is the interesting one, where we are going to take the file created using `make_1g.js`, and create a new one with new content. We are going to change the `,` to `;`, so the end result will look like this: `Name Last Name <email@exampl.ecom>; `.

# The better approach

As explained in the previous example folder I told you that the previous approach is not the right one. In the `converter.js` file you see the following chunk of code that manipulates the data in a very efficient way, since we work directly with the buffer and we are not converting the data in to a temporary state.

```
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

## Important

Generating the big file will will take some time depending on you system, so be patient. While converting on the other hand, will be super fast 😊.

# How to Run the Code

To generate the sample file, run `node make.js` and be patient, around 300MB of data will be generated, so depndign on your machine it my take a moment. Once you have the `coma_file.txt`, run `node convert.js` to get a new file `semicolon_file.txt` with the replaced data.