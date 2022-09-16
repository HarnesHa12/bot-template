module.exports = {
    customId: 'example.secondary',
    type: 'button',
    run: (client, interaction) => {
        interaction.reply({ content: 'Example secondary.', ephemeral: true });
    },
};