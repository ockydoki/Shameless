const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Mes de Julio")
     .setColor("#ff0000")
   .addField(new Array(["Feliz Cumpleaños **Zephyra Terrorhowl** 🎉 pide un deseo!"],["Feliz Cumpleaños **Janvi** 🎉 pide un deseo!"],["Feliz Dia Peru 🇵🇪"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "julio"
}
