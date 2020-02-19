const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("birthdays")
     .setColor("RANDOM")
     .addField(new Array(["Enero 19 - Donkey Lonrot🎭"],["Febrero 20 - Phiivus🍕"],["Marzo 16 - Ciel Phamtom🍻"],["Marzo 22 - Maggicienta🌼"],["Mayo 10 - Kurt Cubain🦥"],["Julio 6 - Zephyra Terrorhowl🐱"],["Julio 29 - Janvi😎"],["Agosto 28 - Nubcitox🍔"],["Octubre 26 - Nazarethxx🧸"],["Noviembre 6 - Jackos Dane💓"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
    name: "Cumple",
    aliases: ["cumple", "cumples", "cumpleaños", "birthday", "birthdays"],
    description: "",
    noalias: "No Aliases",
    accessableby: "Members"
  }
