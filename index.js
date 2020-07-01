const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () =>{
    console.log('The BOT is online!');
bot.user.setActivity('W8x0 Code mad shit', { type: 'WATCHING'});
bot.user.setStatus('idle')
})

bot.login(process.env.token);