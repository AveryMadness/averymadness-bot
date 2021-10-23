const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help-misc',
    description: '',
    execute(message, args, client) {
        const exampleEmbed = new MessageEmbed()
			.setColor('#f30311')
			.setTitle('Bot Help | Misc')
			.setURL()
			.setAuthor('AveryMadnessBOT')
			.setDescription('Misc Commands. \n av!source: with admin or higher, provides a link to the source code. the source code will be avalible to everyone in the future. \n av!discord: gives a link to the discord server.')
			.setThumbnail('https://imgur.com/Nk8wH5A.png')
			.setImage()
			.setTimestamp()
			.setFooter('AveryMadnessBOT Help');
		message.channel.send(exampleEmbed);
    }
}