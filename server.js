// require the basic npm packages we've used in class: express and path
let express = require("express");
let path = require("path");

// tell node we are setting up a express server
// app is a middleware to handle functions between request and response.
let app = express();

// set an initial port,we will use this port later in our listener
let PORT = process.env.PORT || 8080

// Use below two lines set up express app to handle data parsing, for POST and PUT requests.
// you can also use body-parser npm package

// express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({
    extended: true
}));

// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
app.use(express.json());

// points our server to a series of route files
// the route files then provides the server a mapping FUNCTION between urls and specific files.
// tell that these FUNCTIONs required from another js is for server "app", this server.js can have more than one apps.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
// let the server listen on events happening on port, 
// upon events happening on the port, do the call back function
app.listen(PORT, function () {
    console.log("App listening on port: ", PORT)
})