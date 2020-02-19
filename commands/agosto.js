const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Mes de Agosto")
     .setColor("#056600")
   .addField(new Array(["Felix Cumpleaños **Nubcitox** 🎉 pide un deseo!"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "agosto"
}
