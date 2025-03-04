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

if (process.env.FAIL == 'true')
    throw new Error('Artificial failure in Docker compose smoke test. This is safe to ignore.');
  
  if (process.env.CI_MODE === 'true') {
    console.log('Running in CI mode. Application works, exiting.');
    process.exit(0);
  }
  
  let cycleNo = 0;
  console.log('Cycle #' + cycleNo++);
  
  setInterval(
    () => console.log('Cycle #' + cycleNo++),
    10_000
  );

client.login(TOKEN); 