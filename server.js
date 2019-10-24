




var express = require("express");
var bodyParser = require("body-parser");






//lets node know that express server is being created
var app = express();

//port to be used to deploy
var PORT = process.env.PORT || 8080;











require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);






app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

