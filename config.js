import dotenv from 'dotenv';
dotenv.config()

const { TOKEN, CLIENT_ID, GUILD_ID, OPEN_AI_KEY } = process.env;

export { TOKEN, CLIENT_ID, GUILD_ID, OPEN_AI_KEY };