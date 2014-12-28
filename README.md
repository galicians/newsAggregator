
<h3>News aggregator</h3>


Simple news aggregation website displaying the latest news across multiple sources.
Requirements:
-  Display the top 10 headlines from the BBC, SKY and Hacker News on a webpage
-  node.js server. 
-  All data stored in MongoDb.

<h4>Server Side:</h4>

<h6> - Node.js -> Server</h6>
<h6> - Request —> Simplified HTTP client</h6>
<h6> - Mongo and Mongoose -> BBDD and ORM</h6>

<h4>Grunt as task runner with plugins:</h4>

<h6> - jshint for checking our javascript</h6>
<h6> - watch launching jshint after every change in our files</h6>

<h4>Server Side Testing framework:</h4>

<h6> - TDD Mocha</h6>
<h6> - Should matchers</h6>

Server side testing considerations:

<h6> - test/test_server/server_steps.js:</h6>
Rather than hard-coding a port for the tests to run on, I've used server.listen(0) to tell Node to pick one available. To check the port is being used just, server.address().port
<h6> - test/test_server/server.js:</h6>
Instead of start the server, we export it as a module to be able to load it as a value on our testing scripts.
This server is a mock API, that it will simulate the news sties we will connect.