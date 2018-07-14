module.exports = (bot, message, args, Discord) => {
    var embed = new Discord.RichEmbed()
        .setTitle("Infos zu Labi's Hund Jerry", true)
        .setThumbnail(`${bot.user.avatarURL}`, true)
        .addField("Name", 'Jerrizzler "Jerry" Jerrylee', true)
        .addField("Rasse", "Golden Retriever", true)
        .addField("Geburtstag", "10.12.2008", true)
        .addField("Lieblingsessen", "Eatet legit alles", true)
        .setColor(0xd3baa6);
    message.channel.send(embed);
    message.delete();
};