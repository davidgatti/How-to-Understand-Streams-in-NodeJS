# Understanding Buffers in NodeJS

This is another article in a series of articles where I try to demystify big words in computer programming. And the next big word that I want to tackle is the Streams concept.

# What is a Stream

Before we move to some code, lets answer the basic questions, what is a Stream... a stream is a "infinite" flow of data - period. For example, it is the opposite of an array, where an array have a predefined size. You can add new elements to an array, but you can always ask how many of them there are. Where with a stream you don't know when the data will stop flowing.

# If reading a file is a stream, then I know the size - right?

True, a file can be read as a stream or loaded in memory, but the point is that if you open it as a stream there won't be a way fond out how big the file is.

A socket is purely a stream... you don't know how much data you are going to get, the data will be buffered until it reaches a point where the system will pass it to your code, so you can do something with it. The amount of data will depend on the network card, operating system, how fast the data is coming in etc.

This means you work only with a small subset of the whole information. It is important to understand that this means your data will be split in to peaces, and it will be up to you to recombine it in to something that make sense for your situation.

For example, let say that you want to display a full sentence: "I love the articles that David writes.". But you your code will get get:

1. I love the
1. articles that Dav
1. id writes.

Your job as a programmer will be to concatenate all the data until you detect the `.` sign. And only then you can display the whole sentence (Read more about sockets [hear](https://github.com/davidgatti/IoT-Raw-Sockets-Examples)).

# The Pipe concept

The Unix `|` [pipe](https://en.wikipedia.org/wiki/Pipeline_(Unix)) is noting new. It was created in the 70thies by [Douglas McIlroy](https://en.wikipedia.org/wiki/Douglas_McIlroy) while working at [Bell Labs](https://en.wikipedia.org/wiki/Bell_Labs). The job of a pipe is to get the output of one program and pass it as an input to another one.

In NodeJS we use Pipes inside the code to pass the result of one function to the next one. For example as seen in example 3 where we open a file, compress it and save the result in to a new file.

```javascript
raw_file
	.pipe(gz)
	.pipe(to_compressed_file);
```

# Combining Pipes and Streams

By combining this two concept we can chain together chunks of code that will manipulate the data in a very specific way, and pass it to the next pace of code.

# The best use case of a Stream in NodeJS

Imagine that you have two hard drive, one has a 100GB file, the other have enough space to hold the output. Lets assume that the file is a log file where we want to extract some useful data.

Loading 100GB in to memory on your laptop would be unfeasible. We can solve the problem with Streams. Because instead of loading the whole thing in to memory, the system will load the log file in chunks. This allow your app to use a constant amount of RAM.

Basically, your laptop is just a proxy that manipulates the data and dumps the result in another place. Thus, making it possible to do work otherwise impossible.

# Code Brake Down

Each folder in this repository contains a self contained peace of code that just work. Take your time to read the README.md in each example and don't forget to go over all the comments that I wrote. All together should give you a good understanding of what is going on.

# To sum it all up

This article is part of my series that tries to demystify topics that are deemed hard, but where in truth they are just poorly explained. If you like my approach, please consider giving this repo a 🌟.

Also check out my [GitHub](https://github.com/davidgatti) account, where I have other articles and apps that you might find interesting.