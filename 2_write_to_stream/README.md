# Write a file as a stream in NodeJS

The next step is going to be a bit harder. This time we are going to write in to a stream some data with a loop. The function that we are going to use from FS is `.createWriteStream()` and `.write()` to write one character in to the file over and over.

This process also illustrates how buffers work in streams. In example 1 i told you that we are going to read the data in to chunks, this time we write first in to a buffer, and only once it is full we dump it in to the hard drive.

# Why the need of buffer in streams?

You could argue that you could write some code that will read or write one byte at the time. By doing so, you would create a very inefficient solution. Any interaction with the hard rive is very expensive, meaning the operating system needs to take a lot of its CPU time to just perform IO operations on the hard drive.

By reading or writing in chunks, you free the system to perform some other tasks while you process what you've got. Because in this stage you are going to work with data that is in RAM, and this memory is way faster.