const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'whopper',
    description: 'asdfjk',
    execute(message, args, client) {
        const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/845410814625185815/871888533361672193/image0.png');
		message.channel.send(attachment);
    }
}