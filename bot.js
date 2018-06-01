var token = '573464567:AAHbwjjA5msU3axjlrG_kgFhk8-jiprF6_o';
var request = require('sync-request');

var Bot = require('node-telegram-bot-api');
var bot;
bot = new Bot(token, { polling: true });

var getResponse = function (url) {
    var res = request('GET', url, {
        headers: {
            'user-agent': 'example-user-agent',
        },
        timeout: 5000
    });
    return JSON.parse(res.getBody('utf-8'));
}

console.log('bot server started...');

bot.onText(/^\/hi (.+)$/, function (msg, match) {
    var name = match[1];
    bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
        // reply sent!
    });
});

bot.on('text', function (msg) {
    bot.sendMessage(msg.chat.id, getResponse("https://bitbns.com/order/getTickerWithVolume/").substring(0,100));
});

module.exports = bot;