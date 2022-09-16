module.exports = {
    customId: 'example.primary',
    type: 'button',
    run: (client, interaction) => {
        interaction.reply({ content: 'Example primary.', ephemeral: true });
    },
};