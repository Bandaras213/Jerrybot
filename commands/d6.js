module.exports = (bot, message, args, Discord) => {
    var embed = new Discord.RichEmbed()
        .addField(`🎲${message.member.displayName} würfelt einen D6🎲`, `Er ist auf **${Math.floor(Math.random() * 6 + 1)}** gelandet!`, false)
        .setColor(0xBE1931);
    message.delete();
    message.channel.send(embed);
};