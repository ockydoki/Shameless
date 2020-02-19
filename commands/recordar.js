const { RichEmbed } = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {

  let reminderTime = args [0]
  if (!reminderTime) {
      message.reply("Uso Apropiado: <prefix>reminder 15min cualquier texto")
  }

  let reminder = args.slice(1).join(" ");

  let embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.username}'s Programacion de Recordatorio`)
      .addField("Recordatorio", `${reminder}`)
      .addField("Tiempo", `${reminderTime}`)
      .setTimestamp()
  message.channel.send({ embed });

  setTimeout(function() {
    let embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}'s Recordatorio`)
        .addField("Recordatorio", `${reminder}`)
        .setTimestamp()
      message.channel.send({ embed });
  }, ms(reminderTime));
}
