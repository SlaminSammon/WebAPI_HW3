var GitHubApi = require("github");
var express = require("express");

var app = express();
var github = new GitHubApi({
      // required
       version: "3.0.0"
  });

    //github.authenticate({
    //    type: "basic",
    //    username: "SlaminSammon",
 
    //});

    var token = "PUT GITHUB OAUTH HERE.";

    github.authenticate({
        type: "oauth",
        token: token
    });
app.get('/gets', function(req, response){
    github.user.get({ user: 'put your name here'} , function(err, res) {
        console.log("GOT ERR?", err);
        console.log("Username:", res.login);
        console.log("# of public repos:", res.public_repos)
        console.log("# of private repos", res.total_private_repos)
        response.send("Username: " + res.login+ '\n# of public repos: ' + res.public_repos + '\n# of private repos: ' + res.total_private_repos)
        //github.repos.getAll({}, function(err, res) {
           // console.log("GOT ERR?", err);
           // console.log("GOT RES?", res);
        //});
    })
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
