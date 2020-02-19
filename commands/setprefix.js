const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== message.guild.owner.id) return message.reply("Solo dueños pueden usar este comando")

          let prefix = args.join(" ")
          if(!prefix) return message.reply("porfavor define un prefijo")

          bot.guildSettings.set(message.guild.id,prefix,"prefix")

          return message.channel.send(`Nuevo prefijo ha sido cambiado a ${prefix}`)

        }
module.exports.help = {
  name: "setprefix"
}
