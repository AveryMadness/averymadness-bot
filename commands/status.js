const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'status',
    description: 'asfdasdf',
    execute(message, args, client) {
        const exampleEmbed = new MessageEmbed()
			.setColor('#f30311')
			.setTitle('Bot Status')
			.setURL()
			.setAuthor('AveryMadnessBOT')
			.setDescription('Bot Status: Online')
			.setThumbnail('https://imgur.com/Nk8wH5A.png')
			.setImage()
			.setTimestamp()
			.setFooter('AveryMadnessBOT');

		message.channel.send(exampleEmbed);
    }
}