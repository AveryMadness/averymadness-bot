module.exports = {
    name: 'forgor',
    description: 'asfasdf',
    execute(message, args) {
        const attachment = new MessageAttachment('https://cdn.discordapp.com/avatars/577615391388598312/a_910a758c8a66e82f3d9f3cf3358c9967.gif?size=256&f=.gif');
		message.channel.send(attachment);
    }
}