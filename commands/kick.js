const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.roles.some(r => ["Directiva"].includes(r.name))) return message.reply("No tienes rol de Directiva")

       let member = message.mentions.members.first() || message.guild.members.get(args[0])
       if (!member) return message.reply("Esto es invalido")
       if (!member.kickable) return message.reply("No puedo sacar este miembro, es de mayor rango")
       let reason = args.slice(1).join(" )")

       await member.kick().catch(error => {
           return message.reply("Hubo un error!")
       })
       return message.channel.send(`${member.user.tag} fue pateado por ${message.author.tag}! Razon: ${reason}`)
     }

module.exports.help = {
  name: "kick"
}
