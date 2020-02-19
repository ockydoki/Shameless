const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Mes de Marzo")
     .setColor("RANDOM")
   .addField(new Array(["Feliz Cumpleaños **Ciel Phamtom** 🎉 pide un deseo"],["Feliz Cumpleaños **Maggicienta** 🎉 pide un deseo!"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "marzo"
}
