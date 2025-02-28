import { Events } from 'discord.js'
import { CLIENT_ID } from '../config.js';
import chatGpt from '../chatGPT/index.js';

export default {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;
        if (message.mentions.users.find( u => u.id === CLIENT_ID)){
            const chatreply = await chatGpt.chat.completions.create({
                messages: [
                    {
                        role: 'assistant', 
                        content: `You are a discord assistant who always keeps your responses under 2000 words, 
                        and are very careful to be factually accurate.  
                        Respond to this to the very best of your ability:  ${message.content}`
                    }
                ],
                model: 'gpt-4o-mini'
            })
            setTimeout(()=>{
                const { content } = chatreply.choices[0].message
                message.reply({
                    content
                });
            }, 3000)
        }
        return
    }
}