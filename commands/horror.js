const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

// Put All the movies below this marker

let itFollows = new Discord.RichEmbed()
    .setAuthor("It Follows")
    .setColor("#15f153")
    .setImage("https://cdn.discordapp.com/attachments/485025702442303488/611131277558677504/MV5BMmU0MjBlYzYtZWY0MC00MjliLWI3ZmUtMzhlZDVjMWVmYWY4XkEyXkFqcGdeQXVyMTQxNzMzNDI.png")
    .addField("__**Released On**__",
     "**February 4, 2015**")
    .addField("__**Movies Length**__",
     "**94MIN**")
    .addField("__**Movie Rating**__",
     "**(R)** *18+ Movie Viewers* - 🔞")
    .addField("__**Description**__",
    "It Follows is a 2014 American supernatural psychological horror film written and directed by David Robert Mitchell, and starring Maika Monroe, Keir Gilchrist, Daniel Zovatto, Jake Weary, Olivia Luccardi, and Lili Sepe. The film follows a teenage girl named Jay, who is pursued by a supernatural entity after a sexual encounter.")
    .addField("__**Movie Link**__",
    "https://123movies007.com/movie/it-follows/watching.html?ep=1&sv=1")
    .setTimestamp();

    let newHalloween = new Discord.RichEmbed()
        .setAuthor("Halloween")
        .setColor("#15f153")
        .setImage("https://cdn.discordapp.com/attachments/552096296761032704/611137613293682708/MV5BMjAzNjY0Njg0NF5BMl5BanBnXkFtZTgwOTc1NzYyNjM.png")
        .addField("__**Released On**__",
         "**October 19, 2018**")
        .addField("__**Movies Length**__",
         "**105MIN**")
        .addField("__**Movie Rating**__",
         "**(R)** *18+ Movie Viewers* - 🔞")
        .addField("__**Description**__",
        "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.")
        .addField("__**Movie Link**__",
        "http://the123movies.today/halloween-2018/")
        .setTimestamp();

        let deadTone = new Discord.RichEmbed()
            .setAuthor("Dead Tone")
            .setColor("#15f153")
            .setImage("https://cdn.discordapp.com/attachments/552096296761032704/611139148488900619/s-l300.png")
            .addField("__**Released On**__",
             "**May 16, 2007**")
            .addField("__**Movies Length**__",
             "**100MIN**")
            .addField("__**Movie Rating**__",
             "**(R)** *18+ Movie Viewers* - 🔞")
            .addField("__**Description**__",
            "As another semester draws to a close at the University of Dreyskill, a simple game dreamt to help students avoid studying becomes a bloody battle for survival in this stalk-and-slash frightener from filmmaking duo Brian Hooks and Deon Taylor.")
            .addField("__**Movie Link**__",
            "https://123movi.co/movies/dead-tone/?watch-token=RLIZA5MJQe7OGkPj")
            .setTimestamp();













// Randomized option picker

  let hReplies = [itFollows, newHalloween, deadTone, ];
   let hResult = Math.floor((Math.random() * hReplies.length));

  return message.channel.send(hReplies[hResult]);
}

module.exports.help = {
  name: "horror"


}
