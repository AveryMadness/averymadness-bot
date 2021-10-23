module.exports = {
    name: 'say',
    description: 'asd',
    execute(message, args) {
            const SayMessage = message.content.slice(6).trim(); 
            message.channel.send(SayMessage)
    }
}
