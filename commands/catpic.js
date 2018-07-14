module.exports = (bot, message, args, Discord) => {
    var images = [
        "./memes/catpics/cp (1).jpg",
        "./memes/catpics/cp (2).jpg",
        "./memes/catpics/cp (3).jpg",
        "./memes/catpics/cp (4).jpg",
        "./memes/catpics/cp (5).jpg",
        "./memes/catpics/cp (6).jpg",
        "./memes/catpics/cp (7).jpg",
        "./memes/catpics/cp (8).jpg",
        "./memes/catpics/cp (9).jpg",
        "./memes/catpics/cp (10).jpg",
        "./memes/catpics/cp (11).jpg",
        "./memes/catpics/cp (12).jpg",
        "./memes/catpics/cp (13).jpg",
    ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];
    message.delete();
    message.channel.send("<:catto:451525673908043779> Hier hast du ein Bild von Bandas Cats <:catto:451525673908043779>", { files: [`${randomImage}`] });
};