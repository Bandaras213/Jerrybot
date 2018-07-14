module.exports = async (bot, message, args, Discord) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latenz ist ${m.createdTimestamp - message.createdTimestamp}ms. API Latency ist ${Math.round(bot.ping)}ms`);
    message.delete();
};