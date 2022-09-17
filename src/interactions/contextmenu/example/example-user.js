const { ContextMenuCommandBuilder, ApplicationCommandType  } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Example User Context Menu')
        .setType(ApplicationCommandType.User),
    type: 'context-menu',
    run: (client, interaction) => {
        interaction.reply({ content: `Example User Context Menu, used on ${interaction.targetUser.tag}` });
    },
};