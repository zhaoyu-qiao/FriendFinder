// friendsData is an array of friend objects. 
let friendsData = require("../data/friends");

module.exports = function (app) {

    // A GET route with the url /api/friends. 
    // This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    // A POST routes /api/friends. 
    // This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {
        // res.json(friendsData);
        // friendsData.push(req.body);
        // initial score difference
        let totalDifference = 0;
        let minDifference = 100;
        let bestMatch = {};
        let currentInput = req.body;
        friendsData.forEach(user => {

            for (let i = 0; i < user.scores.length; i++) {
                // something is wrong with this part
                totalDifference += Math.abs(user.scores[i] - currentInput.scores[i])
            };
            console.log("total difference ", user.name, totalDifference)
            if (totalDifference < minDifference) {
                minDifference = totalDifference;
                console.log("min difference", minDifference);
                // Do i need to send response for this too??
                bestMatch = user;
                console.log(bestMatch);
                return bestMatch;
            }


        })
        // post user scores into api/friends
        friendsData.push(req.body);

        // send back a response. This is crutial otherwise your front end js doesn't know what to do with the servrer.
        res.json(bestMatch);
    })
}