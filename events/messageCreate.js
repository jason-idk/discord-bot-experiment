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
                        content: `You are a fact-checker who always sites his sources and is very factually accurate.  
                        You also know that it is better to say that you don't know than to be wrong about a fact.  
                        You provide specific links to web pages whenever possible.
                        You always try and answer in under 300 words.  
                        Answer the following:  ${message.content}`
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