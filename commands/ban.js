const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.some(r => ["Directiva"].includes(r.name))) return message.reply("No tienes rol de Directiva")

         let member = message.mentions.members.first() || message.guild.members.get(args[0])
         if (!member) return message.reply("Esto es invalido")
         if (!member.bannable) return message.reply("No puedo banear este miembro, es de mayor rango")
         let reason = args.slice(1).join(" )")

         await member.ban().catch(error => {
             return message.reply("Hubo un error!")
         })
         return message.channel.send(`${member.user.tag} fue baneado por ${message.author.tag}! Razon: ${reason}`)
        }
module.exports.help = {
  name: "ban"
}
