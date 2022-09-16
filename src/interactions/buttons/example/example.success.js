module.exports = {
    customId: 'example.success',
    type: 'button',
    run: (client, interaction) => {
        interaction.reply({ content: 'Example success.', ephemeral: true });
    },
};