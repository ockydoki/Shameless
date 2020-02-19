const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Mes de Junio")
     .setColor("#fffcd6")
   .addField(new Array(["Que queremos celebrar?"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "junio"
}
