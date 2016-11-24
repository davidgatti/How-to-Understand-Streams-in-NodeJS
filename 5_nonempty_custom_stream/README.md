# Create a custom stream in NodeJS that does something

You know how to create a custom Stream. Now it's time to manipulate the data that will flow through our creation. Our source is a file which consists of 'x' characters, one next to the other, with no spaces. The job of our code is to replace those characters with 'k'.

# WARNING - This example is very inefficient

Why is that? Well, because of the following:

1.	We convert the buffer into a string.
1.	We split the string into an array.
1.	We loop over the array to replace each character.
1.	We join the array back into a string.

Lots of steps to just replace the numbers 120 to 107 inside the buffer. I wrote this code as an example of what not to do. I see this way of coding online, and of course it works as seen here, but there's a better way to do this. Check the next example to see a faster and more raw approach.

# How to Run the Code

Simply type the following command in the terminal `node index.js`.