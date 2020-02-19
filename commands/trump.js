const Discord = require("discord.js");
const Imgflipper = require("imgflipper");
const imgflipper = new Imgflipper("ockydoki", "madema84");

module.exports.run = async (bot, message, args) => {
  let text = args.join(" ");
  let op = text.split(' - ');

  let plantilla = op[0];
  let textArriba = op[1];
  let textAbajo = op[2];


  // !meme <plantilla> - "<texto arriba>" - "<texto abajo>""

  imgflipper.generateMeme(91545132, textArriba, textAbajo, (err, img) => {
    if(err) return console.log(err);

    message.channel.send(img);
  })

}

module.exports.help = {
  name: "trump"
}
