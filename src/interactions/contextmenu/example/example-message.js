const { ContextMenuCommandBuilder, ApplicationCommandType  } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Example Message Context Menu')
        .setType(ApplicationCommandType.Message),
    type: 'context-menu',
    run: (client, interaction) => {
        interaction.reply({ content: `Example Message Context Menu, message id ${interaction.targetMessage.id}` });
    },
};