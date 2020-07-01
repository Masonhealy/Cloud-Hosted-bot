const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () =>{
    console.log('The BOT is online!');
    bot.user.setActivity('his dad code', { type: 'WATCHING'});
    bot.user.setStatus('dnd')
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome to our server, ${member}, You better not be a gay fag or I will hunt you down `)
});



bot.login(process.env.token);