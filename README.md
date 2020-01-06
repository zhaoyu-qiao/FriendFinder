## FriendFinder

## Introduction

A node app that allows a user to fill in a survey, and compare his/her answers to other people who already have their answers saved, to find the best match of that user.

## Using the app

- Use node to initiate the app, commandline: node server.js or nodemon server.js if you have nodemon installed.
- Navigate to the website https://mighty-beach-21953.herokuapp.com/
- Click button "Go to Survey", view the questions, select your answers and submit them.
- Check who is your best match, and also find out who is in the list of friends by going to the "API Friends list" link.

## How the app was built

# Firstly, the structure of the files needs to be defined clearly:
  The server.js file is at the root folder
  There are three folders in the root folder:
  data folder which holds the friends' inforamtion
  poublic folder which holds the html pages to display to users
  routing folder which holds the files to tell the server how to route user requests

# Use npm to install and reference to "express", in order to handle different kind of http requests/responses.

- Under data folder
  friends.js file contains an array of friends data, and exports them for reference.

- Under public folder
  There are two html files which set up the frame of the web pages, and also contains java scripts in it to handle the user input and interaction between the web pages and user input.

- Under routing folder
  There are two js files which exports two functions, with one of them guiding the server to handle requests to the html files, and the other guiding the server to handle api requests.

# In the apiRoutes.js file, it contains the function to compare the difference between a user's score and the existing friends' score question by question, and sum up the total difference, this action will loop through all users which are stored in the friends array, in order to find the best match who has the minimum difference among all friends.

- Set total score Difference(var totalDifference) to be 0 at the beggining of the comparison
- Set a high value initially for the minimum Difference
- As the comparison started,the totalDifference will be the score difference between you and the first friend. At the end of this comparison, the totalDifference should be less than the minimun Difference value(var minDifference), assign totalDifference value to the minDiffrence.
- Be sure to clear out the totalDifference score to 0 after each compare, otherwise this number will keep increasing, and your match will always be the first friend ever!
- Server sends the best match friend's data back, so the js file can perform actions and display it on the web page!

# A detailed capture is below:
-  [Home](/image/home.png)
-  [Survey](/image/survey.png)
-  [Match](/image/match.png)
-  [API](/image/api.png)
