var bot = require('./bot');
require('./web')(bot);

var http = require("http");
setInterval(function() {
    try{
        http.get("https://salty-beyond-25254.herokuapp.com/");
    }
    catch(e){
        console.log("Error while pinging");
    }
    
}, 300000);