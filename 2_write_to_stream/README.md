# Write a file as a stream in NodeJS

The next step is going to be a bit harder. This time, we're going to write into a stream. The function that we are going to use from [fs](https://nodejs.org/api/fs.html) is [.createWriteStream()](https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options) and [.write()](https://nodejs.org/api/fs.html#fs_fs_write_fd_data_position_encoding_callback) to write one character into the file over and over.

This process also illustrates how buffers work in streams. In Example 1, I told you that we're going to read the data into chunks. This time, we write first into a buffer, and we dump it into the hard drive only when it's full.

# Why the need for buffers in streams?

You could argue that you could create computer code that will read or write one byte at a time. But by doing so, you would create a very inefficient solution. Any interaction with the hard drive is very expensive, meaning that the operating system needs to take a lot of its CPU time to just perform IO operations.

By reading or writing in chunks, you free the system to perform some other tasks while you process what you've got. In this stage, you're going to work with data that is in RAM, and this memory is much faster.

# How to Run the Code

Simply type the following command in the terminal `node index.js`.