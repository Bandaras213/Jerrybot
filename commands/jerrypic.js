module.exports = (bot, message, args, Discord) => {
    var images = [
        "./memes/jerrypics/jp (1).jpeg",
        "./memes/jerrypics/jp (2).jpeg",
        "./memes/jerrypics/jp (3).jpeg",
        "./memes/jerrypics/jp (4).jpeg",
        "./memes/jerrypics/jp (5).jpeg",
        "./memes/jerrypics/jp (6).jpeg",
        "./memes/jerrypics/jp (7).jpeg",
        "./memes/jerrypics/jp (8).jpeg",
        "./memes/jerrypics/jp (9).jpeg",
        "./memes/jerrypics/jp (10).jpeg",
        "./memes/jerrypics/jp (11).jpeg",
        "./memes/jerrypics/jp (12).jpeg",
        "./memes/jerrypics/jp (13).jpeg",
        "./memes/jerrypics/jp (14).jpeg",
        "./memes/jerrypics/jp (15).jpeg",
        "./memes/jerrypics/jp (16).jpeg",
        "./memes/jerrypics/jp (17).jpeg",
        "./memes/jerrypics/jp (18).jpeg",
        "./memes/jerrypics/jp (19).jpeg",
        "./memes/jerrypics/jp (20).jpeg",
        "./memes/jerrypics/jp (21).jpeg",
        "./memes/jerrypics/jp (22).jpeg",
        "./memes/jerrypics/jp (23).jpeg",
        "./memes/jerrypics/jp (24).jpeg",
        "./memes/jerrypics/jp (25).jpeg",
        "./memes/jerrypics/jp (26).jpeg",
        "./memes/jerrypics/jp (27).jpeg",
        "./memes/jerrypics/jp (28).jpeg",
        "./memes/jerrypics/jp (29).jpeg",
        "./memes/jerrypics/jp (30).jpeg",
        "./memes/jerrypics/jp (31).jpeg",
        "./memes/jerrypics/jp (32).jpeg",
        "./memes/jerrypics/jp (33).jpeg",
        "./memes/jerrypics/jp (34).jpeg",
        "./memes/jerrypics/jp (35).jpeg",
        "./memes/jerrypics/jp (36).jpeg",
        "./memes/jerrypics/jp (37).jpeg",
        "./memes/jerrypics/jp (38).jpeg",
        "./memes/jerrypics/jp (39).jpeg",
        "./memes/jerrypics/jp (40).jpeg",
        "./memes/jerrypics/jp (41).jpeg",
        "./memes/jerrypics/jp (42).jpeg",
        "./memes/jerrypics/jp (43).jpeg",
        "./memes/jerrypics/jp (44).jpeg",
        "./memes/jerrypics/jp (45).jpeg",
        "./memes/jerrypics/jp (46).jpeg",
        "./memes/jerrypics/jp (47).jpeg",
        "./memes/jerrypics/jp (48).jpeg",
        "./memes/jerrypics/jp (49).jpeg",
        "./memes/jerrypics/jp (50).jpeg",
        "./memes/jerrypics/jp (51).jpeg",
        "./memes/jerrypics/jp (52).jpeg",
        "./memes/jerrypics/jp (53).jpeg",
        "./memes/jerrypics/jp (54).jpeg",
        "./memes/jerrypics/jp (55).jpeg",
        "./memes/jerrypics/jp (56).jpeg",
        "./memes/jerrypics/jp (57).jpeg",
        "./memes/jerrypics/jp (58).jpeg",
        "./memes/jerrypics/jp (59).jpeg",
        "./memes/jerrypics/jp (60).jpeg",
        "./memes/jerrypics/jp (61).jpeg",
        "./memes/jerrypics/jp (62).jpeg",
        "./memes/jerrypics/jp (63).jpeg",
        "./memes/jerrypics/jp (64).jpeg",
        "./memes/jerrypics/jp (65).jpeg",
    ];
    var rand = Math.floor(Math.random() * images.length);
    var randomImage = images[rand];
    message.delete();
    message.channel.send("<:jerry:422166931433324544> Hier hast du ein Bild von mir <:jerry:422166931433324544>", { files: [`${randomImage}`] });
};