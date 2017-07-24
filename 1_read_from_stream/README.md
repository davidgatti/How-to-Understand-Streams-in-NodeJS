# Read a file as a stream in NodeJS

Let's start simply, by reading a file from our own hard drive as a stream. To do so, we are going to use the [.createReadStream()](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options) method from the [fs](https://nodejs.org/api/fs.html) module. As you can see from the documentation itself, we're going to work with 64KB chunks.

The job of our code is simple; we just count how much data we've read. Every time a chunk of data will be read by the stream and saved in 'Buffer'. The `while()` loop that we have reads two bytes at a time from the buffer. You can change how much data will be read from the received chunk.

# How to Run the Code

Simply type the following command into the terminal `node index.js`.
