# How to create a custom stream in NodeJS

This is where the fun begins :). Now that we know how streams work and what pipes are, it's time to write our own custom Stream and take advantage of the potential.

We're going to start slow, meaning that we're just going to create an empty stream that will just pass the data to the output. The idea here is to get familiar with creating our own class that inherits the `_transform()` function from the Stream class.
Check the code out, read the comments, and get familiar with the concept.

# How to Run the Code

Simply type the following command in the terminal `node index.js`.
