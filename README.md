# Understanding Buffers in NodeJS

This is another article in a series of articles where I try to demystify big words in computer programming. And the next big word that I want to tackle is the Streams concept.

# What is a Stream

Before we move to some code, lets answer the basic questions, what is a Stream... a stream is a "infinite" flow of data. For example, it is the opposite to an array, where an array have a predefined size. You can add new elements to an array, but you can always ask how many of them there are. Where with a stream you don't know when the data will stop flowing.

# If reading a file is a stream, then I know the size.

Lets put it differently: when you open a stream, you are going to work with small chunks of data. For example in my case, with NodeJS under macOS it is around 65,536 bytes. If you open a file that is for example 1GB of data. your code will actually process 65,536 bytes at the time. The whole file won't be loaded in memory.

Similarly a socket is a stream... you don't know how much data you are going to get, the data will be buffered until it reaches a point where the system will pass it to your code, so you can do something with it. The amount of data will depend on the network card, operating system, how fast the data is coming in etc.

This means you work only with a small subset of the whole information. It is important to understand that this means that your data will be split in to peaces, and it will be up to you to recombine it in to something that make sense to your situation.


For example, let say that you want to display a full sentence: "I love the articles that David writes.". But you get:

1. I love the
1. articles that Dav
1. id writes.

Your job as a programmer will be to concatenate all the data until you detect the `.` sign. And only then you can display the whole sentence.

# The Pipe concept

The Unix `|` [pipe](https://en.wikipedia.org/wiki/Pipeline_(Unix)) is noting new. It was created in the 70thies by [Douglas McIlroy](https://en.wikipedia.org/wiki/Douglas_McIlroy) while working at [Bell Labs](https://en.wikipedia.org/wiki/Bell_Labs). Their job is to get the output of one program and pass it as an input to another one.

In NodeJS we use Pipes inside the code to pass the result of one action to the next one. For example as seen in example 3 where we open a file, compress it and save the result in to a new file.

`raw_file.pipe(gz).pipe(to_compressed_file);`

# Combining Pipes and Streams

By combining this two concept we can chain together chunks of code that will manipulate the data in a very specific way, and pass it to the next pace of code.

# The best use case of a Stream

Imagine that you have two hard drive, one has a 100GB file, the other have 100GB of free space. Lets assume that the file is a log file where we want to extract some useful data.

Loading 100GB in to memory on your laptop would be unfeasible. I for example have 8GB of ram. We can solve the problem with Streams. Because instead of loading the whole thing in to memory, the system will load the log file chunk by chunk. So know you have to deal only with 70KB of data at the time.

Basically your laptop is just a proxy that manipulates the data and dumps the result in another place. Thus making it possible to do work otherwise impossible.

# Code Brake Down

1. **read_from_stream**: simple example to show how to open a file and read its content
1. **write_to_stream**: simple example to show how to write to a file
1. **compress_a_stream**: simple example to show how to compress data that is streaming
1. **empty_custom_stream**: hear we create our won stream implementation
1. **nonempty_custom_stream**: hear we make our custom stream implementation actually do something
1. **pause_a_stream**: hear we learn how we can pause a stream and resume it course
1. **practical_conversion**: in the final example we are going to change the original file and save it in to a new one.

# To sum it all up

This article is part of my series that tries to demystify topics that are deemed hard, but where in truth they are just poorly explained. If you like my approach, please consider giving this repo a 🌟.

Also check out my [GitHub](https://github.com/davidgatti) account, where I have other articles and apps that you might find interesting.