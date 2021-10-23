/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help-secrets',
	decription: '',
	execute(message, args, client) {
		const exampleEmbed = new MessageEmbed()
			.setColor('#f30311')
			.setTitle('Bot Help | Secrets')
			.setURL()
			.setAuthor('AveryMadnessBOT')
			.setDescription('Secrets. \n there are hidden commands to find yourself. \n hints can be found in av!secret.')
			.setThumbnail('https://imgur.com/Nk8wH5A.png')
			.setImage()
			.setTimestamp()
			.setFooter('AveryMadnessBOT Help');
		message.channel.send(exampleEmbed);
	}
};
