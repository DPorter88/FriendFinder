



var path = require("path");






module.exports = function (app) {





    app.get("/survey", function (req, res)
        res.sendFile(path.join(__dirname, "../public/survey.html"));
});





//Routes home if no match
   app.get("*", function (req, res) {
       res.sendFile(path.join(__dirname, "../public/home.html"));
   });
};

