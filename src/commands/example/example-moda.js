const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('example-modal')
        .setDescription('Example modal'),
    run: async (client, interaction) => {
        const modal = new ModalBuilder()
            .setCustomId('example.modal')
            .setTitle('Example modal')
            .setComponents([
                new ActionRowBuilder()
                    .setComponents([
                        new TextInputBuilder()
                            .setCustomId('example.modal.text')
                            .setLabel('Example Label')
                            .setPlaceholder('Example placeholder')
                            .setMinLength(2)
                            .setMaxLength(20)
                            .setStyle(TextInputStyle.Short)
                    ]),
            ]);

        await interaction.showModal(modal);
    },
};