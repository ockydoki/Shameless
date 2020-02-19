const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Mes de Enero")
     .setColor("#a10000")
   .addField(new Array(["Feliz Cumpleaños **Donkey Lonrot** 🎉 pide un deseo!"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "Enero"
}
