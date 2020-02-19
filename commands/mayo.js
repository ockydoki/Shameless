const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Mes de Mayo")
     .setColor("#00bd4f")
   .addField(new Array(["Feliz Cumpleaños **Kurt Cubain** 🎉 pide un deseo!"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "mayo"
}
