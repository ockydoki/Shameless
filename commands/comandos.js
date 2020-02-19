const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
     .setDescription("Comandos")
     .setColor("#15f153")
   .addField(new Array(["**USE EL PREFIJO + CUALQUIER COMANDO**"],["-directiva"],["-eventos"],["-cumpleaños/cumples/birthdays"],["-Hora"],["-Cualquier mes del año"],["-recordar (# de minutos/horas)min/hr (nota de recordatorio)"],["-ppt + (piedra, papel o tijera)"],["-fortuna = numero?"],["-memes"]), bot.user.username);

   return message.channel.send(botembed);
  }
module.exports.help = {
  name: "Comandos"
}
