const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'asdf',
    execute(message, args, client) {
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
}