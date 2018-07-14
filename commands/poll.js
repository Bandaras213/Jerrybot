module.exports = (bot, message, args, Discord) => {
    let question = args.slice(0).join(" ");
    if (!args[1])
        return message.channel.send(`${message.member.user} frag etwas worüber du abstimmen willst!`);

    var embed = new Discord.RichEmbed()
        .addField(`❗${message.member.displayName} hat eine Umfrage gestartet:`, `❓${question}`)
        .setColor(0xd3baa6)
        .setFooter(`Benutzt jetzt die reactions um abzustimmen!`);
    message.delete();
    message.channel.send({ embed })
        .then(function (message) {
            message.react('👍')
                .then(() => message.react('🤷'))
                .then(() => message.react('👎'))
        }).catch(() => console.error(`Emoji failed to react because of ${error}`));
};