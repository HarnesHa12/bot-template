module.exports = {
    customId: 'example.value.2',
    type: 'select-option',
    run: (client, interaction) => {
        interaction.reply({ content: 'You selected example option 2', ephemeral: true });
    },
};