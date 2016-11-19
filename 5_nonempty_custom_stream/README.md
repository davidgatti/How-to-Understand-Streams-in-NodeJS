# Create a custom stream in NodeJS that dose something

You know how to create a custom Stream, time to manipulate the data that will thorough through our creation. Our source is a file which consists of 'x' characters one next to the other with no spaces. The job of our code is to replace those characters with 'k'

# WARNING - This example is very inefficient

Why is that? Well because of the following:

1. We convert the buffer in to a string.
1. We split the string in to an array.
1. We loop over the array to replace each character.
1. We join the array back in to a string

Lots of step just to replace the number 120 to 107 inside the buffer. I wrote this code as an example what not to do. I see this way of coding on-line and of course it works as seen hear, but there is a better way to do this. Check the next example to see a quicker and more raw approach.

# How to Run the Code

Simply type the following command in the terminal `node index.js`.