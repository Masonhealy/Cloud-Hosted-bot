const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () =>{
    console.log('The BOT is online!');
bot.user.setActivity('To its master', { type: 'LISTENING'});
bot.user.setStatus('idle')
})

bot.login(process.env.token);