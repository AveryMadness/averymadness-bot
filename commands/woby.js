const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'woby',
    description: 'wooby cat',
    execute(message, args, client) {
        message.channel.send('wooby cat')
        const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/797477168665985034/892613432422051880/unknown.png');
		message.channel.send(attachment);
    }
}