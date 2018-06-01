var token = '573464567:AAHbwjjA5msU3axjlrG_kgFhk8-jiprF6_o';
var request = require('request');;

var Bot = require('node-telegram-bot-api');
var bot;
bot = new Bot(token, { polling: true });

console.log('bot server started...');

bot.onText(/^\/hi (.+)$/, function (msg, match) {
    var name = match[1];
    bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
        // reply sent!
    });
});

bot.on('text', function (msg) {
    request('https://bx.in.th/api/', function (error, response, body) {
        bot.sendMessage(msg.chat.id, JSON.stringify(body).substring(0, 100));
    });

});

module.exports = bot;