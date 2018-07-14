module.exports = (bot, message, args, Discord) => {
    message.delete();
    message.channel.send('Hello, World!');
};
