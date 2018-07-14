module.exports = (bot, message, args, Discord) => {
    message.delete();
    message.channel.send(args.join(" "));
};
