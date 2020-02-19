const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Mes de Octubre")
     .setColor("#fffb00")
   .addField(new Array(["Feliz Cumpleaños **Nazarethxx** 🎉 pide un deseo!"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "octubre"
}
