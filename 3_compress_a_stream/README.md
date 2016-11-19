# Compress a stream of data in NodeJS

A cool thing about Streams is that you can chain them using pipes. This means that you can manipulate the data that is coming in real time. This example perfectly show how you can compress the content of a file by piping the stream to the `zlib` lib module before saving it back to disk or passing it to the next pipe.

# How to Run the Code

Simply type the following command in the terminal `node index.js`.