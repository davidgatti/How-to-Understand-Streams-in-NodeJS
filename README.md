# Understanding Streams in NodeJS

This is another installment in my series of articles where I try to demystify big words that are used in computer programming. And the next big word that I want to tackle is the Streams concept.

# What is a Stream?

Before we move on to some code, let's answer the basic questions:

What is a Stream? 
A stream is an "infinite" flow of data that is sent in small chunks - period. For example, it's the opposite of an array, which will have a predefined size. You can add new elements to an array, but you can always ask how many items there are. With a stream, you don't know when the data will stop flowing - in a network environment, that is. In C, for example, you could use [.fseek()](https://www.tutorialspoint.com/c_standard_library/c_function_fseek.htm) to find the total length of a open file. But in NodeJS, this is not the case - at least, I haven't discovered a method to check the file size if the file was opened as a Stream.

# I'm reading a file as a stream, so I know the size - right?

True, a file can be read as a stream or load it in to memory, but the point is that if you open it as a stream, there won't be a way to determine how big the file is.

A socket is purely a stream...You don't know how much data you are going to get; the data will be buffered by the system or network card until it reaches a point where the system will pass it to your code, so you can do something with it. The amount of data will depend on the network card, operating system, how fast the data is coming in, etc.

This means that you work with just a small subset of all of the information. It's important to understand that your data will be split into pieces, and it will be up to you to recombine it into something that makes sense for your situation.

For example, let's say that you want to display a full sentence: "I love the articles that David writes." But your code will get the sentence in the following way:

1.	I love the
2.	articles that Dav
3.	id writes.

Your job as a programmer will be to concatenate all of the data until you detect the `.` sign. And only then can you display the whole sentence (Read more about sockets [here](https://github.com/davidgatti/IoT-Raw-Sockets-Examples)).

# The Pipe concept

The Unix `|` [pipe](https://en.wikipedia.org/wiki/Pipeline_(Unix)) is nothing new. It was created in the 70s by [Douglas McIlroy](https://en.wikipedia.org/wiki/Douglas_McIlroy) while he worked at [Bell Labs](https://en.wikipedia.org/wiki/Bell_Labs). The job of a pipe is to get the output of one program and pass it as input to another one.

In NodeJS, we use Pipes inside the code to pass the result of one function to the next one. This is seen in Example 3, where we open a file, compress it, and save the result to a new file.

```javascript
raw_file.pipe(gz).pipe(to_compressed_file);
```

# Combining Pipes and Streams

By combining these two concepts, we can chain together chunks of code to manipulate the data in a very specific way, and pass it to the next piece of code.

# The best use case of a Stream in NodeJS

Imagine that you have two hard drives, one with a 100GB file, the other with enough space to hold the output. Let's assume that the file is a log file, where we want to extract some useful data.

Loading 100GB into memory on your laptop would not be feasible, but we can solve the problem with Streams. Because instead of loading the whole file into memory, the system will load the log file in chunks. This allows your app to use a constant amount of RAM.

Basically, your laptop is just a proxy that manipulates the data and dumps the result in another place, thus making it possible to do work that would otherwise be impossible.

# Code Break Down

Each folder in this repository contains a self-contained piece of code that just works. Take the time to read the README.md in each example, and don't forget to go over all of my comments. All of this in combination should give you a good understanding of what is going on.

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out my [GitHub account](https://github.com/davidgatti), where you'll find additional resources you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in building custom solutions on top of AWS. Follow this link to learn more: https://0x4447.com. Alternatively, send an email to [hello@0x4447.email](mailto:hello@0x4447.email?Subject=Hello%20From%20Repo&Body=Hi%2C%0A%0AMy%20name%20is%20NAME%2C%20and%20I%27d%20like%20to%20get%20in%20touch%20with%20someone%20at%200x4447.%0A%0AI%27d%20like%20to%20discuss%20the%20following%20topics%3A%0A%0A-%20LIST_OF_TOPICS_TO_DISCUSS%0A%0ASome%20useful%20information%3A%0A%0A-%20My%20full%20name%20is%3A%20FIRST_NAME%20LAST_NAME%0A-%20My%20time%20zone%20is%3A%20TIME_ZONE%0A-%20My%20working%20hours%20are%20from%3A%20TIME%20till%20TIME%0A-%20My%20company%20name%20is%3A%20COMPANY%20NAME%0A-%20My%20company%20website%20is%3A%20https%3A%2F%2F%0A%0ABest%20regards.).
