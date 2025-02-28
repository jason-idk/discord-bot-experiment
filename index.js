import { Client, Collection, GatewayIntentBits } from 'discord.js';
import commands from './commands/index.js'
import events from './events/index.js'

import { TOKEN } from './config.js'

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMembers
    ],
    allowedMentions: {
        repliedUser: false
    }
 });

client.commands = new Collection();

for (const command of commands) {
    if ('data' in command && 'execute' in command){
        client.commands.set(command.data.name, command);
    }
    else {
        console.log(`[WARNING] The command ${command.data.name} is missing a required property.`)
    }
}

for (const event of events) {
    if (event.once) {
        client.once(event.name, (...args)=> event.execute(...args))
    }
    else {
        client.on(event.name, (...args) => event.execute(...args))
    }
}

client.login(TOKEN); 