var bot = require('./bot');
require('./web')(bot);

var http = require("http");
setInterval(function() {
    http.get("https://salty-beyond-25254.herokuapp.com/");
}, 300000);