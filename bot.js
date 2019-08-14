const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.Jjg_0f6Cc1g5BwnqpS0rEWXPey5R3gTK);//BOT_TOKEN is the Client Secret
