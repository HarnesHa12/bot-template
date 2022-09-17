module.exports = {
    customId: 'example.value.1',
    type: 'select-option',
    run: (client, interaction) => {
        interaction.reply({ content: 'You selected example option 1', ephemeral: true });
    },
};