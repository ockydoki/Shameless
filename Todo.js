const Discord = require("discord.js");
const  bot = new Discord.Client({ disableEveryone: true });
const config = require("./config.json");
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
require("./util/eventhandler.js")(bot);
const superagent = require("superagent");
const Imgflipper = require("imgflipper");
const imgflipper = new Imgflipper("ockydoki", "madema84");
module.exports = bot


const Enmap = require('enmap')
bot.guildSettings = new Enmap({name: "Settings"})
const defaultsettings = require("./util/defaultsettings")

function createserver(guildid, object) {
  bot.guildSettings.ensure(guildid, object)
}

bot.on("guildCreate",(guild) => {
  createserver(guild.id, defaultsettings)
})

bot.on("guildDelete",(guild) => {
  bot.guildSettings.delete(guild.id)
})

   bot.on("message", async (message) => {
     if (message.author.bot) return;
     let prefix = bot.guildSettings.get(message.guild.id,"prefix")
     if (!message.content.startsWith(prefix)) return;

     let args = message.content.slice(prefix.length).trim().split(/ +/);
     let cmd = args.shift().toLowerCase();


     try {
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot,message,args);
      } catch(e) {
          console.log(e.message);
      }  finally {
        console.log(`${message.author.username} run the command: ${cmd}`);
      }




      //   if (message.content.startsWith(prefix + "julio")) {
     //     message.channel.send("Feliz Cumpleaños Zephyra Terrorhowl 🎉 y Janvi 🎉 pide un deseo!");
     // } else
     //   if (message.content.startsWith(prefix + "agosto")) {
     //     message.channel.send("Feliz Cumpleaños Nubcitox 🎉 pide un deseo!");
     // }
})

bot.login(config.token)
