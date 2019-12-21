// Dependencies:
// require path package to be able to route url to html files.
let path = require("path");


// Routing:
// Export a function by using this js, so other file can use the function to handle routing.  
// This function takes in app as an argument
module.exports = function (app) {

    // handles the routing for get requests for different urls (survey / home).
    // A GET Route to /survey which should display the survey page.
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
    // A default, catch-all route that leads to home.html which displays the home page.
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}