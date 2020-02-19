const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generando...")

  let {body} = await superagent
  .get(`https://meme-api.herokuapp.com/gimme`)
  // console.log(body.file)
  if(!{body}) return message.channel.send("Me rompi! Intenta otra vez")

      let mEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`ShameBot Meme!`, message.guild.iconURL)
      .setImage(body.url)
      .setTimestamp()
      .setFooter(`ShameBot`, bot.user.displayAvatarURL)

      message.channel.send({embed: mEmbed})

      msg.delete();
    }



module.exports.help = {
  name: "dog"
}
