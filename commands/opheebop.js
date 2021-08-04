const { MessageAttachment } = require("discord.js");
module.exports = {
    name: 'opheebop',
    description: "This mutes a member",
    execute(message, args) {
        const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/859084740014899273/872310760670363678/download.jpeg');
		// Send the attachment in the message channel
		message.channel.send(attachment);
    }
}