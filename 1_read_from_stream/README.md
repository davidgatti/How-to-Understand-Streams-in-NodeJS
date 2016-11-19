# Read a file as a stream in NodeJS

Lets start simple by reading a file from our own hard drive as a stream. To do so we are going to use the [.createReadStream()](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options) method from the [fs](https://nodejs.org/api/fs.html) module. As you can see from the documentation it self, we learn that we are going to work with chunks of 64Kb.

The job of our code is simple, we just count how much data did we read. The `while()` loop that we have actual reads one byte at the time. You can change how much data will be read from the received chunk.

# How to Run the Code

Simply type the following command in the terminal `node index.js`.