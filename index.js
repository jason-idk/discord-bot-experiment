import { Client, Collection, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import commands from './commands/index.js'
import events from './events/index.js'

dotenv.config()
const { TOKEN } = process.env

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
client.cooldowns = new Collection();

for (const command of commands) {
    if ('data' in command && 'execute' in command){
        client.commands.set(command.data.name, command);
    }
    else {
        console.log(`[WARNING] The command at ${filePath} is missing a required property.`)
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