const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Comandos")
     .setColor("#15f153")
   .addField(new Array(["**Estos comandos son unicamente para la Directiva"],["**USE EL PREFIJO + CUALQUIER COMANDO**"],["-setprefix + (prefijo nuevo)"],["-kick + @(nombre de usuario)"],["-ban + @(nombre de usuario)"], bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "directiva"
}
