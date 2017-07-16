# Understanding Streams in NodeJS

This is another installment in my series of articles where I try to demystify big words that are used in computer programming. And the next big word that I want to tackle is the Streams concept.

# What is a Stream?

Before we move on to some code, let's answer the basic questions:

What is a Stream? A stream is an "infinite" flow of data that is sent in small chunks - period. For example, it's the opposite of an array, which will have a predefined size. You can add new elements to an array, but you can always ask how many items there are. With a stream, you don't know when the data will stop flowing - in a network environment, that is. In C, for example, you could use [.fseek()](https://www.tutorialspoint.com/c_standard_library/c_function_fseek.htm) to find the total length of a open file. But in NodeJS, this is not the case - at least, I haven't discovered a method to check the file size if the file was opened as a Stream.

# I'm reading a file as a stream, so I know the size - right?

True, a file can be read as a stream or load it in to memory, but the point is that if you open it as a stream, there won't be a way to determine how big the file is.

A socket is purely a stream...You don't know how much data you are going to get; the data will be buffered  by the ssytem or nettwork card until it reaches a point where the system will pass it to your code, so you can do something with it. The amount of data will depend on the network card, operating system, how fast the data is coming in, etc.

This means that you work with just a small subset of all of the information. It's important to understand that your data will be split into pieces, and it will be up to you to recombine it into something that makes sense for your situation.

For example, let's say that you want to display a full sentence: "I love the articles that David writes." But your code will get the sentence in the following way:

1.	I love the
1.	articles that Dav
1.	id writes.

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

Each folder in this repository contains a self-contained peace of code that just works. Take the time to read the README.md in each example, and don't forget to go over all of my comments. All of this in combination should give you a good understanding of what is going on.

# The End

If you've enjoyed this article/project, please consider giving it a 🌟 or donate.

- [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/gattidavid/25)
- [![Star on GitHub](https://img.shields.io/github/stars/davidgatti/How-to-Understand-Streams-in-NodeJS.svg?style=social)](https://github.com/davidgatti/How-to-Stream-Movies-using-NodeJS/stargazers)
- [![Watch on GitHub](https://img.shields.io/github/watchers/davidgatti/How-to-Understand-Streams-in-NodeJS.svg?style=social)](https://github.com/davidgatti/How-to-Stream-Movies-using-NodeJS/watchers)

Also check out my [GitHub account](https://github.com/davidgatti), where I have other articles and apps that you might find interesting.

## Where to follow

You can follow me on social media 🐙😇, at the following locations:

- [GitHub](https://github.com/davidgatti)
- [Twitter](https://twitter.com/dawidgatti)
- [Instagram](https://www.instagram.com/gattidavid/)

## More about me

I don’t only live on GitHub, I try to do many things not to get bored 🙃. To learn more about me, you can visit the following links:

- [Podcasts](http://david.gatti.pl/podcasts)
- [Articles](http://david.gatti.pl/articles)
- [Technical Articles](http://david.gatti.pl/technical_articles)
- [Software Projects](http://david.gatti.pl/software_projects)
- [Hardware Projects](http://david.gatti.pl/hardware_projects)

