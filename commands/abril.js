const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Mes de Abril")
     .setColor("#F8F8FF")
   .addField(new Array(["Feliz Dia **Venezuela** 🇻🇪"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "abril"
}
