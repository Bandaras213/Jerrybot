module.exports = (bot, message, Discord) => {
    if (message.author.equals(bot.user)) return;
    if (message.content.indexOf(bot.config.prefix) !== 0) return;
    const args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (bot.commands.has(command)) {
        bot.commands.get(command)(bot, message, args, Discord);
        bot.log(`${message.member.displayName} executed command "${command}" on the ${message.member.guild} Server`);
    };
};