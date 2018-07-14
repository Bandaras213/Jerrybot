module.exports = (bot, message, args, Discord) => {
    if (args[0]) {
        var embed = new Discord.RichEmbed()
            .addField(`:gay_pride_flag: Jerry's Gay Test :gay_pride_flag:`, `**${(args.join(" "))}** ist zu **${Math.floor(Math.random() * 100 + 1)}%** Gay!`, false)
            .setColor(0xd3baa6);
        message.delete();
        message.channel.send({ embed });
    }
    else {
        var embed = new Discord.RichEmbed()
            .addField(`:gay_pride_flag: Jerry's Gay Test :gay_pride_flag:`, `**${message.member.displayName}** ist zu **${Math.floor(Math.random() * 100 + 1)}%** Gay!`, false)
            .setColor(0xd3baa6);
        message.delete();
        message.channel.send({ embed });
    };
};