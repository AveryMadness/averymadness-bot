const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'troll',
    description: 'asdfjhadfjkh',
    execute(message, args, client) {
        const attachment = new MessageAttachment('https://cdn.discordapp.com/emojis/701862121021112361.png?v=1');
	message.channel.send(attachment);
    }
}