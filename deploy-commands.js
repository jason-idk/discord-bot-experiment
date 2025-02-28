import { REST, Routes } from 'discord.js';
import commands from './commands/index.js'
import { TOKEN, CLIENT_ID, GUILD_ID } from './config.js'

const rest = new REST().setToken(TOKEN);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
        
        const commandData = [];
        for (const command of commands) {
            commandData.push(command.data.toJSON());
        }

		const data = await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
			{ body: commandData },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();