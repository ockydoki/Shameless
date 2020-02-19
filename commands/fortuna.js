const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[2]) return message.reply("Has una pregunta completa");
  let replies= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed =  new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("RANDOM")
  .addField("Pregunta", question)
  .addField("Respuesta", replies[result]);

  message.channel.send(ballembed);
}


module.exports.help = {
  name: "fortuna"
}
