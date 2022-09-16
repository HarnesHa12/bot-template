module.exports = {
    customId: 'example.danger',
    type: 'button',
    run: (client, interaction) => {
        interaction.reply({ content: 'Example danger.', ephemeral: true });
    },
};