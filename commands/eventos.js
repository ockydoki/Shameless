const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Eventos")
     .setColor("RANDOM")
     .addField(new Array(["**QUE QUEREMOS HACER??**"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
    name: "Eventos",
    aliases: ["evento", "eventos"],
    description: "",
    noalias: "No Aliases",
    accessableby: "Members"
  }
