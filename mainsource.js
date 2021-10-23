
// basic shit

//if you give me another FUCKING definition error i will fucking kill you bot 
const { Client, Intents, MessageEmbed, MessageAttachment, guild, user, member, VoiceChannel } = require('discord.js');

const fs = require('fs');


const Permissions = require('discord.js');


require('dotenv').config();
const discordjsReactionRole = require('discordjs-reaction-role')

const ReactionRole = require('dns')

const Discord = require('discord.js');

const mongoose = require('mongoose');

// prefix
const prefix = process.env.PREFIX;

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



mongoose.connect(process.env.SRV, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
}).then(() => {
	console.log('Connected to database!');
}).catch((err) => {
	console.log(err);
});


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ + /);
	const command = args.shift().toLowerCase();


	client.commands = new Discord.Collection();
	client.events = new Discord.Collection();

	const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
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

	if (command === 'whopper') {
		client.commands.get('whopper').execute(message, args);
	}

	if (command === '') {
		message.channel.send('Please specify a command.');
	}

	if (command === 'creation') {
		client.commands.get('creation').execute(message, args);
	}

	if (command === '3947') {
		client.commands.get('3947').execute(message, args);
	}

	if (command === 'nooobus') {
		client.commands.get('nooobus').execute(message, args);
	}

	if (command === 'wooby') {
		client.commands.get('wooby').execute(message, args);
	}

	if (command === 'woby') {
		client.commands.get('woby').execute(message, args);
	}

	if (command === 'dog') {
		client.commands.get('dog').execute(message, args);
	}

	if (command === 'forgor') {
		client.commands.get('forgor').execute(message, args);
	}

	if (command === 'youtube') {
		client.commands.get('youtube').execute(message, args);
	}

	if (command === 'source') {
		client.commands.get('source').execute(message, args);
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

	if (command === 'mother') {
		client.commands.get('mother').execute(message, args);
	}
	if (command === 'shit') {
		client.commands.get('test').execute(message, args);
	}

	if (command === 'say') {
		client.commands.get('say').execute(message, args);
	}

	// music
	if (command === 'play') {
		client.commands.get('play').execute(message, args);
	}


	if (command === 'troll') {
		client.commands.get('troll').execute(message, args);
	}

	// main commands
	if (command === 'status') {
		client.commands.get('status').execute(message, args);
	}

	if (command === 'startbackend') {
		client.commands.get('startbackdoor').execute(message, args);
	}

	if (command === 'help') {
		client.commands.get('help').execute(message, args);
	}

	if (command === 'help-moderation') {
		client.commands.get('help-moderation').execute(message, args);
	}

	if (command === 'help-secrets') {
		client.commands.get('help-secrets').execute(message, args);
	}
	if (command === 'help-misc') {
		client.commands.get('help-misc').execute(message, args);
	}

	if (command === 'secret') {
		client.commands.get('secret').execute(message, args);
	}
});

// login
client.login(process.env.TOKEN);
