const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'cheese',
    description: 'asdasd',
    execute(message, args, client) {
        const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/867899799104520196/870107571493675139/Screenshot_20210723-045125_TikTok.jpg');
		// Send the attachment in the message channel
		message.channel.send(attachment);
    }
}