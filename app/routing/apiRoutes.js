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
        //res.json(friendsData);
        //friendsData.push(req.body);
        let totalDifference = 0;
        let minDifference = 100;
        let bestMatch = {};
        let currentInput = req.body;
        friendsData.forEach(user => {
            // user.scores.forEach(score => {
            //     score
            // })
            for (let i = 0; i < user.scores.length; i++) {
                totalDifference += Math.abs(user.scores[i] - currentInput.scores[i])
            };
            console.log("difference ", user.name, totalDifference)
            if (totalDifference < minDifference) {
                minDifference = totalDifference;
                bestMatch = user;
                console.log(bestMatch);
            }

        })
        // post user scores into api/friends

        friendsData.push(req.body);
    })
}