const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'secret',
    description: '',
    execute(message, args, client) {
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
}