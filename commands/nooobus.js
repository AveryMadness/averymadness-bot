const { MessageAttachment } = require('discord.js');

module.exports = {
	name: 'nooobus',
	description: 'asd',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/807909515806507009/892617228950839296/unknown.png');
		message.channel.send(attachment);
	}
};
