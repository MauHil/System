const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('wenn du hilfe brauchst dann schreib bei #📧support-anfragen📧 eine nachricht und dann deine hilfe was du brauchst');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
