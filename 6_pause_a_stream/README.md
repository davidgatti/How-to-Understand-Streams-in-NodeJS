# How to pause a stream in NodeJS

An interesting aspect of streams is the fact that you can pause them. This is not useful when working with files. But convenient when working with sockets. Let say you are streaming a movie or song, you could notifies the stream to pause, and defacto tell the server to stop sending you data. For example the user asked for it, or you are unable to handle the data coming in.

The use case is narrow, but worth knowing about.

# How to Run the Code

Simply type the following command in the terminal `node index.js`.