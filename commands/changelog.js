const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'changelog',
    description: 'asdfhjklasfhjlasd',
    execute(message, args) {
        const exampleEmbed = new MessageEmbed()
			.setColor('#f30311')
			.setTitle('Changelog')
			.setURL()
			.setAuthor('AveryMadnessBOT')
			.setDescription('Changelog: \n July 29th 2021 UPDATE 2: \n added moderation commands, any issues should be reported to <@419224403415662592> \n added secrets, good luck finding them. \n added source command, admins and above can obtain the source with av!source. to request access to make changes, contact <@419224403415662592>. \n added discord command, to obtain the discord invite.  ')
			.setThumbnail('https://imgur.com/Nk8wH5A.png')
			.setImage()
			.setTimestamp()
			.setFooter('AveryMadnessBOT');

		message.channel.send(exampleEmbed);
    }
}