exports.run = async (bot, message, args) => {
  let botping = new Date() - message.createdAt
    let apiping = bot.apiping

    return message.channel.send(`Bot Ping: ${botping}ms\nApi ping: ${apiping}ms`)
}
