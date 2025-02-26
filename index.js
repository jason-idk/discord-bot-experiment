 const { Client, Events, GatewayIntentBits } = require('discord.js');
 const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
 const token = 'YOUR_BOT_TOKEN'; 
 
 client.on(Events.ClientReady, () => {
     console.log(`Logged in as ${client.user.tag}!`);
 });
 
 client.on(Events.MessageCreate, message => {
     if (message.content === 'ping') {
         message.reply('pong!');
     }
 });
 
 client.login(token);