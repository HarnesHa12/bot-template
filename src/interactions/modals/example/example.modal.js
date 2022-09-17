module.exports = {
    customId: 'example.modal',
    type: 'modal',
    run: (client, interaction) => {
        const exampleText = interaction.fields.getTextInputValue('example.modal.text');

        interaction.reply({ content: `Example Modal, ${exampleText}` });
    },
};