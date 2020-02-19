const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Mes de diciembre")
     .setColor("#00b37a")
   .addField(new Array(["Feliz Navidad 🎄 y Feliz Año Nuevo 🎆 Te desea la familia Shameless!"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "diciembre"
}
