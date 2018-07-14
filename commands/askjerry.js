module.exports = (bot, message, args, Discord) => {
    var heiligerjerry = [
        //Ja
        "woof, Ja <:jerry:422166931433324544>",
        "Natürlich, woof <:jerry:422166931433324544>",
        "woof Ja, ohne Zweifel <:jerry:422166931433324544>",
        "Ja, auf jeden Fall, woof <:jerry:422166931433324544>",
        "woof, Soweit ich weiß, Ja <:jerry:422166931433324544>",
        "Sieht so aus, woof <:jerry:422166931433324544>",
        "woof, Die Zeichen deuten auf Ja <:jerry:422166931433324544>",
        " Davon kannst du ausgehen, woof <:jerry:422166931433324544>",
        "woof, Ja klar <:jerry:422166931433324544>",
        "Ja sicher, woof <:jerry:422166931433324544>",
        //Vieleicht
        "Vielleicht, woof <:jerry2:424601525424357386>",
        "woof, Ich weiß es nicht <:jerry2:424601525424357386>",
        "Frag später nochmal, woof <:jerry2:424601525424357386>",
        "Du bist noch nicht bereit für die Antwort, woof <:jerry2:424601525424357386>",
        "woof, sag ich dir für ein Leckerli <:jerry2:424601525424357386>",
        "Warum willst du sowas wissen? woof <:jerry2:424601525424357386>",
        //Nein
        "woof, Nein <:jerry3:424602433705213963>",
        "Ich sage Nein, woof <:jerry3:424602433705213963>",
        "woof, Nein, auf keinen fall <:jerry3:424602433705213963>",
        "Natürlich nicht, woof <:jerry3:424602433705213963>",
        "woof, Sieht nach einem Nein aus <:jerry3:424602433705213963>",
        "Nein, niemals, woof <:jerry3:424602433705213963>",
        //Easteregg
        "hdf",
    ];
    var embed = new Discord.RichEmbed()
        .addField(`${message.member.displayName} fragt:`, `${(args.join(" "))}`, false)
        .addField(`Meine Antwort lautet:`, `${heiligerjerry[Math.floor(Math.random() * heiligerjerry.length)]}`, false)
        .setColor(0xd3baa6);
    if (args[0]) message.channel.send(embed), message.delete();
    else message.channel.send(`<:jerry:422166931433324544> Woof, ${message.member.user} frag mich eine Ja/Nein frage`);
};
