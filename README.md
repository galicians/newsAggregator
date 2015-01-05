##**News aggregator**

Simple news aggregation website displaying the latest news across multiple sources.
Requirements:
-  Display the top 10 headlines from the BBC, SKY and Hacker News on a webpage
-  node.js server. 
-  All data stored in MongoDb.

###**Project Overview**
To see the project live just visit the url: https://newseveryminute.herokuapp.com/
To run the project on your local machine just clone:
 - git clone https://github.com/galicians/newsAggregator
 - npm start (this will install node modules and bower components the first time, and will start the server)

To run the backend tests, you will need to install previously "should" and "mocha" and then:
 - npm test (15 tests passing)
To run the frontend tests "karma" and "jasmine" need to be installed and then run: 
 - npm run-script frontend (8 tests passing)


<h4>Server Side:</h4>

<h6> - Node.js -> Server</h6>
<h6> - Request —> Simplified HTTP client</h6>
<h6> - Mongo and Mongoose -> BBDD and ORM</h6>
<h6> - Restify -> REST Sercices</h6>

<h4>Grunt as task runner with plugins:</h4>

<h6> - jshint for checking our javascript</h6>
<h6> - watch launching jshint after every change in our files</h6>

<h4>Server Side Testing framework:</h4>

<h6> - TDD Mocha</h6>
<h6> - Should matchers</h6>

Server side testing considerations:

<h6> - test/test_server/server_steps.js:</h6>
Rather than hard-coding a port for the tests to run on, I've used server.listen(0) to tell Node to pick one available. To check the port is being used just, server.address().port
This server is reading the file news.feeds and piping the data into a response.
This allow us to similate the news site servers for testing.
<h6> - test/test_server/server.js:</h6>
Instead of start the server, we export it as a module to be able to load it as a value on our testing scripts.
This server is a mock API, that it will simulate the news sties we will connect.
<h6> - config.js:</h6>
In this file, the sources are provided and can be modified.
Same for the frequency fetching time(in miliseconds)
Here is specificed as well the number of records that the route getNews will provide when receives a get request.


<h4>Front end:</h4>

<h6> - Angular.js --> MVC</h6>
<h6> - Bootstrap --> front-end (html-css)framework</h6>

<h4>Front End Testing framework:</h4>

<h6> - Karma </h6>
<h6> - Jasmine</h6>
<h6>- Karma-chrome-launcher</h6>

