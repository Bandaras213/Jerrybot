//created with tutorials from 〈evie.codes〉& Aeirety;
//using https://discord.js.org
const Discord = require("discord.js");

var bot = new Discord.Client();
bot.config = require('./config.json');
bot.log = require('./functions/log.js');

//Ready & Activity Handler
bot.on('ready', () => require('./events/ready.js')(bot));
//Message Event Handler
bot.on('message', message => require('./events/message.js')(bot, message, Discord));

//Commands
bot.commands = new Discord.Collection();
bot.commands.set('askjerry', require('./commands/askjerry.js'));
bot.commands.set('binda', require('./commands/binda.js'));
bot.commands.set('catpic', require('./commands/catpic.js'));
bot.commands.set('d6', require('./commands/d6.js'));
bot.commands.set('d20', require('./commands/d20.js'));
bot.commands.set('gaytest', require('./commands/gaytest.js'));
bot.commands.set('info', require('./commands/info.js'));
bot.commands.set('jerry', require('./commands/jerry.js'));
bot.commands.set('jerrypic', require('./commands/jerrypic.js'));
bot.commands.set('mojopic', require('./commands/mojopic.js'));
bot.commands.set('orhan', require('./commands/orhan.js'));
bot.commands.set('ping', require('./commands/ping.js'));
bot.commands.set('poll', require('./commands/poll.js'));
bot.commands.set('rate', require('./commands/rate.js'));
bot.commands.set('say', require('./commands/say.js'));
bot.commands.set('test', require('./commands/test.js'));
// bot.commands.set('name', require('./commands/name.js'));

bot.login(bot.config.token);