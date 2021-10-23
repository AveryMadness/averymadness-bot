const { MessageAttachment } = require("discord.js");
module.exports = {
    name: 'mother',
    description: "This mutes a member",
    execute(message, args,) {
        const attachment = new MessageAttachment('https://cdn.discordapp.com/attachments/813506444250185758/874119432983707658/image0.webp');
		// Send the attachment in the message channel
		message.channel.send(attachment);
    }
}