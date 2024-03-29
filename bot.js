const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
bot.commands = new Discord.Collection();
const bot = new Discord.Client({disbleEveryone: true}); 

fs.readdir("./commands/", (err, file) => {

  if(err) console.log(err);

  let jsfile = file.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands!");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

client.on('ready', () => {

    console.log('I am ready!');
});


client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }
});
 
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "~";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  // dont touch above

});
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
