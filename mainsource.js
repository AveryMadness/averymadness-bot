// basic shit
const { Client, Intents, MessageEmbed, MessageAttachment } = require('discord.js');
const { CommandHandler } = require('advanced-command-handler');

// Discord, Collection

// starts new discord cient
// const client = new Client();
// prefix
const prefix = 'av!';

const intents = new Intents(32509);
const client = new Client({ intents: intents, partials: ['CHANNEL', 'USER', 'REACTION'], restRequestTimeout: 60000 });

// const fs = require('fs');


// login message + Status
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
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

/*
	CommandHandler.create({
		commandsDir: 'commands',
		eventsDir: 'events',
		// Optionnals :
		prefixes: ['av!'],
		owners: ['Discord IDs']
	});

	 CommandHandler.launch({
		token: 'accidentally left the token here at first :skull:',
		// Optionnal :
		clientOptions: {
			// Client Options, see Discord.js#ClientOptions
		}
	});
*/
	// test command
	 if (command === 'awaken') {
		// eslint-disable-next-line no-constant-condition
		if (message.member.roles.cache.has('868949778912927755') || '616127916090195968') {
			message.channel.send('i have awoken. i have been resurected.');
		} else {
			message.channel.send('You do not have the required permissions to use this command.');
		}
	}
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


	if (command === 'status') {
		const exampleEmbed = new MessageEmbed()
			.setColor('#f30311')
			.setTitle('Bot Status')
			.setURL()
			.setAuthor('AveryMadnessBOT')
			.setDescription('Bot Status: Offline (Big Changes Soon.)')
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
});


client.login('TOKEN GOES HERE');
