const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Mes de Febrero")
     .setColor("#620e5b")
   .addField(new Array(["Felix Cumpleaños **Phiivus** 🎉 pide un deseo!"],["Feliz Dia del Amor y la Amistad	💘"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "febrero"
}
