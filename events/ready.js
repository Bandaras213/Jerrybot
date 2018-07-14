module.exports = (bot) => {
    bot.log(`Bot ${bot.user.tag} has started with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
    bot.user.setActivity('mit seinem Ball');
};