import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
import commands from './commands/index.js'

dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const rest = new REST().setToken(TOKEN);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
        
        const commandData = [];
        for (const command of commands) {
            commandData.push(command.data.toJSON());
        }

        // The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
			{ body: commandData },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();