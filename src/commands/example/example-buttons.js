const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('example-buttons')
        .setDescription('Example buttons'),
    run: (client, interaction) => {
        const row = new ActionRowBuilder()
            .setComponents([
                new ButtonBuilder()
                    .setCustomId('example.primary')
                    .setStyle(ButtonStyle.Primary)
                    .setLabel('Example Primary'),
                new ButtonBuilder()
                    .setCustomId('example.secondary')
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel('Example Secondary'),
                new ButtonBuilder()
                    .setCustomId('example.success')
                    .setStyle(ButtonStyle.Success)
                    .setLabel('Example Success'),
                new ButtonBuilder()
                    .setCustomId('example.danger')
                    .setStyle(ButtonStyle.Danger)
                    .setLabel('Example Danger'),
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Link)
                    .setLabel('Example Link')
                    .setURL('https://harnes.xyz/'),
            ]);

        interaction.reply({ content: 'Buttons', components: [row] });
    },
};