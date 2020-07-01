const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () =>{
    console.log('The BOT is online!');
bot.user.setActivity('W8x0 Struggle to code', { type: 'WATCHING'});
bot.user.setStatus('idle')
})

bot.login(process.env.token);