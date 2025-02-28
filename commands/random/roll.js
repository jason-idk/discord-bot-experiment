import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Rolls a specified number of dice (e.g., /roll 3d6 to roll three six-sided dice).')
        .addStringOption(option =>
            option
                .setName('dice')
                .setDescription('e.g. 3d6 or 1d20')
                .setRequired(true)
        ),
    async execute(interaction) {
        try {
            const dice = await interaction.options.getString('dice');
            if (dice) {
                const [numRolls, numSides] = dice.split('d').map(num => parseInt(num));
                const rolls = [];
                for (let i = 0; i < numRolls; i++) {
                    const roll = Math.ceil(Math.random() * numSides)
                    rolls.push(roll)
                }
                console.log(rolls);
                await interaction.reply(`
                ${interaction.user.username} rolled ${rolls.map(roll => ' ' + roll.toString())} for a total of ${rolls.reduce((prev, curr) => prev += curr, 0).toString()}!`)
            }
            else {
                await interaction.reply(`No dice!`)
            }
        } catch (error) {
            console.error(error)
        }
    }
}