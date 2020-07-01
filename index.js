const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () =>{
    console.log('The BOT is online!');
})

bot.login(process.env.token);