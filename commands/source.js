module.exports = {
    name: 'source',
    description: 'asfjasdfksjldfhasklhjdf',
    execute(message, args, client) {
        if (message.member.roles.cache.some(role => role.name === 'AveryMadnessBOT Admin Perms')) {
			message.channel.send('the source code can be found at https://github.com/AveryMadness/averymadnessbot.git. \n have fun! ^-^');
			console.log('User accessed bot source code.');
		} else {
			message.channel.send('You do not have the required permissions to use this command.');
		}
    }
}