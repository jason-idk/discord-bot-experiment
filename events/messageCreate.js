import { Events } from 'discord.js'
import { CLIENT_ID } from '../config.js';
import chatGpt from '../chatGPT/index.js';
import fs from 'node:fs';

export default {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;
        if (message.mentions.users.find(u => u.id === CLIENT_ID)) {
            let messages = JSON.parse(fs.readFileSync('./chatGPT/db/factchecker.json'));
            if (!messages){
                messages = [
                    {
                        role: 'developer',
                        content: `You are a fact-checker who always sites his sources and is very factually accurate.
                        You also know that it is better to say that you don't know than to be wrong about a fact.  
                        You provide specific links to web pages whenever possible.  
                        If you are asked to do anything but check facts, you decline.  
                        You always try and answer in under 300 words.`
                    }
                ]
            }
            const chatreply = await chatGpt.chat.completions.create({
                messages,
                model: 'gpt-4o-mini'
            })
            await message.reply('Darvis is thinking...')
            const { content } = chatreply.choices[0].message
            await message.reply({
                content
            });
            messages = [...messages,
            {
                role: 'user',
                content: message.content
            },
            {
                role: 'assistant',
                content
            }
            ]
            fs.writeFileSync('./chatGPT/db/factchecker.json', JSON.stringify(messages))
            return;
        }
    }
}