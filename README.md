#**News aggregator**

Simple news aggregation website displaying the latest news across multiple sources.It will display the **top 10 headlines** from the **BBC**, **SKY** and **Hacker News** on a webpage.

**Requirements:**
- ```node.js``` server. 
- All data stored in MongoDb.

##**Project Overview**

To see the project live just visit the url: https://newseveryminute.herokuapp.com/

To run the project on your local machine, just clone:
 - ```git clone https://github.com/galicians/newsAggregator```
 - ```npm start``` (this will install node modules and bower components the first time, and it will start the server)

To run the back-end tests, you will previously need to install **should** and **mocha** and then run the following command:
```javascript
npm test
```
and the output will be : ```15 tests passing```.

To run the frontend tests, __karma__ and __jasmine__ need to be installed.

After having them installed, run this command: 
```javascript
npm run-script frontend
``` 
And the output will be : ```8 tests passing```.


####**Server Side:**

- **Node.js** => Server
- **Request** => Simplified HTTP client
- **Mongo** and **Mongoose** => BBDD and ORM
- **Restify** => REST Services
- **Grunt** as task runner with the following plugins:

    - **jshint** for checking our javascript
    - **watch** for launching jshint after every change in our files


==============================================

####**Server Side Testing framework:**

- **TDD Mocha**
- __Should__ matchers

=================================================

####**Server side testing considerations:**

```javascript
test/test_server/server_steps.js

```

Rather than hard-coding a port for the tests to run on, I've used server.listen(0) to tell Node to pick one available. To check the port is being used just, server.address().port
This server is reading the file ```news.feeds``` and piping the data into a response.
This allows us to similate the news site servers for testing.

```javascript
test/test_server/server.js
```
Instead of start the server, we export it as a module to be able to load it as a value on our testing scripts.
This server is a mock API, that will simulate the news sites we will connect.

```javascript
config.js
```
In this file, the sources are provided and can be modified.
Same for the frequency fetching time (in milliseconds). Here is specificed as well the number of records that the route ``getNews``` will provide when receives a get request.

===========================================

####**Front End:**

- **Angular.js** => MVC
- **Bootstrap** => Front-End (HTML and CSS) framework

##**Front End Testing framework:**

- **Karma**
- **Jasmine**
- **Karma-chrome-launcher**

