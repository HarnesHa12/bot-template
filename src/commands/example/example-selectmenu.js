const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('example-selectmenu')
        .setDescription('Example select menu.'),
    run: (client, interaction) => {
        const row = new ActionRowBuilder()
            .setComponents([
                new SelectMenuBuilder()
                    .setCustomId('example.selectmenu')
                    .setOptions([
                        {
                            label: 'Example Label',
                            description: 'Example description',
                            value: 'example.value.1',
                        },
                        {
                            label: 'Example Label 2',
                            description: 'Example description 2',
                            value: 'example.value.2',
                        },
                    ]),
            ]);

        interaction.reply({ content: 'Example Select Menu', components: [row] });
    },
};