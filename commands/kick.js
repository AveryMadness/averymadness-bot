const { Client, Intents, MessageEmbed, MessageAttachment, guild, user, member, VoiceChannel } = require('discord.js');

const fs = require('fs');

const Discord = require('discord.js');



module.exports = {
    name: 'kick',
    description: 'afjklhasdfjklhasldkfjasdfhjk',
    execute(message, args) {
        if (message.member.roles.cache.some(role => role.name === 'AveryMadnessBOT Admin Perms')) {
			const user = message.mentions.users.first();
			if (user) {
			  const member = message.guild.member(user);
			  if (member) {
					member
				  .kick('AveryMadnessBOT sends their regards')
				  .then(() => {
							const exampleEmbed = new MessageEmbed()
								.setColor('#f30311')
								.setTitle('')
								.setURL()
								.setAuthor('')
								.setDescription('Successfully kicked ${user.tag}!')
								.setThumbnail('')
								.setImage()
								.setTimestamp()
								.setFooter('');
							message.channel.send(exampleEmbed);
							console.log('user was kicked.');
				  })
				  .catch(err => {
							const exampleEmbed = new MessageEmbed()
								.setColor('#f30311')
								.setTitle('')
								.setURL()
								.setAuthor('')
								.setDescription('I was unable to kick the member. This could be due to missing permissions, or an error with the code. \n Please contact <@419224403415662592> for assistance. ')
								.setThumbnail('')
								.setImage()
								.setTimestamp()
								.setFooter('');
							message.channel.send(exampleEmbed);
							console.error(err);
				  });
			  } else {
					const exampleEmbed = new MessageEmbed()
						.setColor('#f30311')
						.setTitle('')
						.setURL()
						.setAuthor('')
						.setDescription('That user is not in the server.')
						.setThumbnail('')
						.setImage()
						.setTimestamp()
						.setFooter('');
					message.channel.send(exampleEmbed);
					console.log('user tried to be kicked but was not found.');
			  }
			} else {
				const exampleEmbed = new MessageEmbed()
					.setColor('#f30311')
					.setTitle('')
					.setURL()
					.setAuthor('')
			  	.setDescription("You didn't mention the user to kick!")
					.setImage()
					.setTimestamp()
					.setFooter('');
				message.channel.send(exampleEmbed);
			}
		  } else {
			  const exampleEmbed = new MessageEmbed()
			  .setColor('#f30311')
			  .setTitle('')
			  .setURL()
			  .setAuthor('')
			  .setDescription('You do not have the required permissions to use this command. \n if you think this is a mistake, please contact <@419224403415662592> for assistance.')
			  .setImage()
			  .setTimestamp()
			  .setFooter('');
			  message.channel.send(exampleEmbed);
			console.log('Kick failed. Not Enough Permissions.');
		  }
	}
}
