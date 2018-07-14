module.exports = async (bot, message, args, Discord) => {
    if (args[0]) message.channel.send(`Ich gebe **${(args.join(" "))}** eine ✨**${Math.floor(Math.random() * 10 + 1)}/10!**✨`);
    else (message.channel.send(`Ich gebe **${message.member.user}** eine ✨**${Math.floor(Math.random() * 10 + 1)}/10!**✨`));
    message.delete();
};