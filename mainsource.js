/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
// basic shit
const { Client, Intents, MessageEmbed, MessageAttachment, guild, user, member, Discord } = require('discord.js');

// prefix
const prefix = 'av!';

const intents = new Intents(32509);
const client = new Client({ intents: intents, partials: ['CHANNEL', 'USER', 'REACTION'], restRequestTimeout: 60000 });


// login message + Status
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}! \n if you need any assistance understanding, or getting code to work, please contact AveryMadness#0619 on discord.`);
	var activities = [`av!help`, `av!status`, `av!secret`], i = 0;
	setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
		type: 'PLAYING'
	}), 15000);
});


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ + /);
	const command = args.shift().toLowerCase();

	// commands


	// test command
	/* if (command === 'awaken') {
		// eslint-disable-next-line no-constant-condition
		if (message.member.roles.cache.has('868949778912927755') || '616127916090195968') {
			message.channel.send('i have awoken. i have been resurected.');
		} else {
			message.channel.send('You do not have the required permissions to use this command.');
		}
	} */

	// secret commands
	if (command === 'cheese') {
		const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/867899799104520196/870107571493675139/Screenshot_20210723-045125_TikTok.jpg');
		// Send the attachment in the message channel
		message.channel.send(attachment);
	}

	if (command === 'dog') {
		const attachment = new MessageAttachment('https://imgur.com/pKra7We.gif');
		// Send the attachment in the message channel
		message.channel.send(attachment);
	}

	if (command === 'forgor') {
		const attachment = new MessageAttachment('https://imgur.com/AER8uK5.jpg');
		// Send the attachment in the message channel
		message.channel.send(attachment);
	}
	if (command === 'join') {
		client.on('message', async message => {
		// Join the same voice channel of the author of the message
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
			}
		});
	}

	// main commands
	if (command === 'status') {
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

	if (command === 'help') {
		const exampleEmbed = new MessageEmbed()
			.setColor('#f30311')
			.setTitle('Bot Help | Main')
			.setURL()
			.setAuthor('AveryMadnessBOT')
			.setDescription('Main Help: \n av!status: Shows The Bots Status. \n av!help: you are here. \n av!help-(category): shows more defined help commands. e.g: av!help-moderation.')
			.setThumbnail('https://imgur.com/Nk8wH5A.png')
			.setImage()
			.setTimestamp()
			.setFooter('AveryMadnessBOT Help');

		message.channel.send(exampleEmbed);
	}

	if (command === 'help-moderation') {
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

	if (command === 'help-secrets') {
		const exampleEmbed = new MessageEmbed()
			.setColor('#f30311')
			.setTitle('Bot Help | Secrets')
			.setURL()
			.setAuthor('AveryMadnessBOT')
			.setDescription('Secrets. \n there are hidden commands to find yourself. \n hints can be found in av!secrets.')
			.setThumbnail('https://imgur.com/Nk8wH5A.png')
			.setImage()
			.setTimestamp()
			.setFooter('AveryMadnessBOT Help');
		message.channel.send(exampleEmbed);
	}

	if (command === 'secrets') {
		const exampleEmbed = new MessageEmbed()
			.setColor('#f30311')
			.setTitle('Secrets')
			.setURL()
			.setAuthor('AveryMadnessBOT')
			.setDescription('Hint #1: the name of a lovable pet/animal. \n Hint #2: the name of a food, particulatily fancied by rats and mice. \n Hint #3: a meme, most used with a skull emoji.')
			.setThumbnail('https://imgur.com/Nk8wH5A.png')
			.setImage()
			.setTimestamp()
			.setFooter('AveryMadnessBOT');
		message.channel.send(exampleEmbed);
	}


	if (command === 'source') {
		if (message.member.roles.cache.some(role => role.name === 'AveryMadnessBOT Admin Perms')) {
			message.channel.send('the source code can be found at https://github.com/AveryMadness/averymadnessbot.git. \n have fun! ^-^');
			console.log('User accessed bot source code.');
		} else {
			message.channel.send('You do not have the required permissions to use this command.');
		}
	}

	if (message.content.startsWith('av!kick')) {
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
								.setTitle('User Kick Successful')
								.setURL()
								.setAuthor('AveryMadnessBOT')
								.setDescription('Successfully kicked ${user.tag}!')
								.setThumbnail('https://imgur.com/Nk8wH5A.png')
								.setImage()
								.setTimestamp()
								.setFooter('AveryMadnessBOT');
							message.channel.send(exampleEmbed);
							console.log('user was kicked.');
				  })
				  .catch(err => {
							const exampleEmbed = new MessageEmbed()
								.setColor('#f30311')
								.setTitle('User Kick Unsuccessful')
								.setURL()
								.setAuthor('AveryMadnessBOT')
								.setDescription('I was unable to kick the member. This could be due to missing permissions, or an error with the code. \n Please contact AveryMadness#0619 for assistance. ')
								.setThumbnail('https://imgur.com/Nk8wH5A.png')
								.setImage()
								.setTimestamp()
								.setFooter('AveryMadnessBOT');
							message.channel.send(exampleEmbed);
							console.error(err);
				  });
			  } else {
					const exampleEmbed = new MessageEmbed()
						.setColor('#f30311')
						.setTitle('User Not Found')
						.setURL()
						.setAuthor('AveryMadnessBOT')
						.setDescription('That user is not in the server.')
						.setThumbnail('https://imgur.com/Nk8wH5A.png')
						.setImage()
						.setTimestamp()
						.setFooter('AveryMadnessBOT');
					message.channel.send(exampleEmbed);
					console.log('user tried to be kicked but was not found.');
			  }
			} else {
				const exampleEmbed = new MessageEmbed()
					.setColor('#f30311')
					.setTitle('User Not Found')
					.setURL()
					.setAuthor('AveryMadnessBOT')
			  	.setDescription("You didn't mention the user to kick!")
					.setImage()
					.setTimestamp()
					.setFooter('AveryMadnessBOT');
				message.channel.send(exampleEmbed);
			}
		  } else {
			  const exampleEmbed = new MessageEmbed()
			  .setColor('#f30311')
			  .setTitle('An Error Occured')
			  .setURL()
			  .setAuthor('AveryMadnessBOT')
			  .setDescription('You do not have the required permissions to use this command. \n if you think this is a mistake, please contact AveryMadness#0619 for assistance.')
			  .setImage()
			  .setTimestamp()
			  .setFooter('AveryMadnessBOT');
			  message.channel.send(exampleEmbed);
			console.log('Kick failed. Not Enough Permissions.');
		  }
	}

	if (message.content.startsWith('av!ban')) {
		 if (message.member.roles.cache.some(role => role.name === 'AveryMadnessBOT Admin Perms')) {
			if (user) {
				const member = message.guild.member(user);
				if (member) {
			  member
						.ban({
					  reason: 'AveryMadnessBOT sends their regards.'
						})
						.then(() => {
							const exampleEmbed = new MessageEmbed()
								.setColor('#f30311')
								.setTitle('User Kick Successful')
								.setURL()
								.setAuthor('AveryMadnessBOT')
								.setDescription('Successfully banned ${user.tag}!')
								.setThumbnail('https://imgur.com/Nk8wH5A.png')
								.setImage()
								.setTimestamp()
								.setFooter('AveryMadnessBOT');
							message.channel.send(exampleEmbed);
						})
						.catch(err => {
							const exampleEmbed = new MessageEmbed()
								.setColor('#f30311')
								.setTitle('User Kick Unsuccessful')
								.setURL()
								.setAuthor('AveryMadnessBOT')
								.setDescription('I was unable to kick the member. This could be due to missing permissions, or an error with the code. \n Please contact AveryMadness#0619 for assistance. ')
								.setThumbnail('https://imgur.com/Nk8wH5A.png')
								.setImage()
								.setTimestamp()
								.setFooter('AveryMadnessBOT');
							message.channel.send(exampleEmbed);
					  console.error(err);
						});
				} else {
					const exampleEmbed = new MessageEmbed()
						.setColor('#f30311')
						.setTitle('User Not Found')
						.setURL()
						.setAuthor('AveryMadnessBOT')
						.setDescription('That user is not in the server.')
						.setThumbnail('https://imgur.com/Nk8wH5A.png')
						.setImage()
						.setTimestamp()
						.setFooter('AveryMadnessBOT');
					message.channel.send(exampleEmbed);
				}
	  } else {
				const exampleEmbed = new MessageEmbed()
					.setColor('#f30311')
					.setTitle('User Not Found')
					.setURL()
					.setAuthor('AveryMadnessBOT')
	  .setDescription("You didn't mention the user to ban!")
					.setImage()
					.setTimestamp()
					.setFooter('AveryMadnessBOT');
				message.channel.send(exampleEmbed);
	  }
		} else {
			const exampleEmbed = new MessageEmbed()
			  .setColor('#f30311')
			  .setTitle('An Error Occured')
			  .setURL()
			  .setAuthor('AveryMadnessBOT')
			  .setDescription('You do not have the required permissions to use this command. \n if you think this is a mistake, please contact AveryMadness#0619 for assistance.')
			  .setImage()
			  .setTimestamp()
			  .setFooter('AveryMadnessBOT');
			  message.channel.send(exampleEmbed);
		}
	}
});

client.login('ODU4MzY3MDI3NTcxNDU4MDg4.YNdGlw.gGIJxUZT8nzu7ODzr2SsYvSi_Ho');



client.login('TOKEN GOES HERE');
