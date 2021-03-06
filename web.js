var express = require('express');
var packageInfo = require('./package.json');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version, Author: 'Venu' });
});

var server = app.listen(process.env.PORT, function () {
  var host = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
  var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

  console.log('Web server started at http://%s:%s', host, port);
});

module.exports = function (bot) {
  app.post('/' + bot.token, function (req, res) {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};