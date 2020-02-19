const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Comandos")
     .setColor("RANDOM")
   .addField(new Array(["**El prefijo + comando + = + - (OBLIGATORIO mensaje1) - (opcional mensaje2)**"],["-arg"],["-bryan"],["-esqueleto"],["-rana"],["-trump"],["-salud"],["-slap"],["-smart"],["-victoria"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "Comandos"
}
