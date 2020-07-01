const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () =>{
    console.log('The BOT is online!');
bot.user.setActivity('Fuck Pride!', {type: "WATCHING"} )
})

bot.login(process.env.token);