/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
// basic shit
const { Client, Intents, MessageEmbed, MessageAttachment, guild, user, member, VoiceChannel } = require('discord.js');

const fs = require('fs');

const Discord = require('discord.js');


// prefix
const prefix = 'av!';

const intents = new Intents(32509);
const client = new Client({ intents: intents, partials: ['CHANNEL', 'USER', 'REACTION'], restRequestTimeout: 60000 });


// login message + Status
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}! \n if you need any assistance understanding, or getting code to work, please contact AveryMadness#0619 on discord. \n https://cdn.discordapp.com/attachments/868516505413894175/871876408367022090/stormzy_glitches-1.mp4`);
	var activities = [`av!help`, `av!status`, `av!secret`], i = 0;
	setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
		type: 'PLAYING'
	}), 15000);
});


     client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ + /);
	const command = args.shift().toLowerCase();


	client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);	
}
	// commands
	if (command === 'changelog') {
		client.commands.get('changelog').execute(message, args);
	}

	if (command === 'opheebop') {
		client.commands.get('opheebop').execute(message, args);
	}

	if (command === 'ping') {
		client.commands.get('ping').execute(message, args);
	}

	// secret commands
	if (command === 'cheese') {
		client.commands.get('cheese').execute(message, args);
	}

	if (command === "whopper") {
		client.commands.get('whopper').execute(message, args);
	}

	if (command === 'creation') {
		client.commands.get('creation').execute(message, args);
	}

	if (command === 'wooby') {
	client.commands.get('wooby').execute(message, args);
	}

	if (command === 'dog') {
	client.commands.get('dog').execute(message, args);
	}

	if (command === 'forgor') {
	client.commands.get('forgor').execute(message, args);
	}



	if (command === 'source') {
		client.commands.get('discord').execute(message, args);
	}

	if (command === 'discord') {
		client.commands.get('discord').execute(message, args);
	}

	if (command === 'mute') {
		client.commands.get('mute').execute(message, args);
	}

	if (message.content.startsWith('av!kick')) {
		client.commands.get('kick').execute(message, args);
	}

	if (command === 'website') {
		client.commands.get('website').execute(message, args);
	}

	if (command === 'ban') {
		client.commands.get('ban').execute(message, args);
	}



// music 
if (command === 'play') {
	client.commands.get('play').execute(message, args);
}



	if (command === 'stopbackdoor') {
		const exampleEmbed = new MessageEmbed()
			.setColor('#f30311')
			.setTitle('')
			.setURL()
			.setAuthor('')
			.setDescription('Backdoor Succsessfully Closed.')
			.setThumbnail('')
			.setImage()
			.setTimestamp('')
			.setFooter('');

		message.channel.send(exampleEmbed);
	}

if (command === 'troll') {
	const attachment = new MessageAttachment('https://cdn.discordapp.com/emojis/701862121021112361.png?v=1');
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
			.setDescription('Secrets. \n there are hidden commands to find yourself. \n hints can be found in av!secret.')
			.setThumbnail('https://imgur.com/Nk8wH5A.png')
			.setImage()
			.setTimestamp()
			.setFooter('AveryMadnessBOT Help');
		message.channel.send(exampleEmbed);
	}
	if (command === 'help-misc') {
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

	if (command === 'secret') {
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

	// :troll:
	if (command === 'startbackdoor') {
		const exampleEmbed = new MessageEmbed()
			.setColor('#f30311')
			.setTitle('')
			.setURL('')
			.setAuthor('')
			.setDescription('Backdoor Succsessfully Started.')
			.setThumbnail('')
			.setImage('')
			.setTimestamp('')
			.setFooter('');
		message.channel.send(exampleEmbed);
	}


		 
});

client.login('TOKEN GOES HERE');
