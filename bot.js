var token = '573464567:AAHbwjjA5msU3axjlrG_kgFhk8-jiprF6_o';


var Bot = require('node-telegram-bot-api');
var bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token, { polling: true });
  //bot.setWebHook(process.env.HEROKU_URL + bot.token);
} 
else {
  bot = new Bot(token, { polling: true });
}

console.log('bot server started...');

bot.onText(/^\/hi (.+)$/, function (msg, match) {
    var name = match[1];
    bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
        // reply sent!
    });
});

bot.on('text',function(msg){
    bot.sendMessage(msg.chat.id, JSON.stringify(msg));
});

module.exports = bot;