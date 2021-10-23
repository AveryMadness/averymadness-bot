const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help-moderation',
    description: '',
    execute(message, args, client) {
        const exampleEmbed = new MessageEmbed()
			.setColor('#f30311')
			.setTitle('Bot Help | Moderation')
			.setURL()
			.setAuthor('AveryMadnessBOT')
			.setDescription('Moderation Help. \n av!kick: Kicks a mentioned user. \n av!ban: Bans a mentioned user. \n av!mute (WIP): Mutes a mentioned user.')
			.setThumbnail('https://imgur.com/Nk8wH5A.png')
			.setImage()
			.setTimestamp()
			.setFooter('AveryMadnessBOT Help');

		message.channel.send(exampleEmbed);
    }
}