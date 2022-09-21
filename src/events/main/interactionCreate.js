const handleError = require('../../functions/handleError');
require('dotenv').config();

module.exports = {
    name: 'interactionCreate',
    run: async (client, interaction) => {
        switch (true) {
            case interaction.isChatInputCommand(): {
                const command = client.commands.get(interaction.commandName);

                if (command.ownerOnly && interaction.user.id !== process.env.OWNER_ID) return;

                try {
                    await command.run(client, interaction);
                }
                catch (error) {
                    handleError(client, interaction, error);
                }
                
                break;
            }
            case interaction.isButton(): {
                const button = client.interactions.filter(x => x.type === 'button').get(interaction.customId.split('-')[0]);
                
                if (!button) return handleError(client, interaction, new Error(`Button ${interaction.customId} was not found.`));
                
                try {
                    await button.run(client, interaction);
                }
                catch (error) {
                    handleError(client, interaction, error);
                }

                break;
            }
            case interaction.isSelectMenu(): {
                const selectOption = client.interactions.filter(x => x.type === 'select-option' && interaction.values.includes(x.customId)).first();

                if (!selectOption) return handleError(client, interaction, new Error(`Select option ${interaction.customId} was not found.`));

                try {
                    await selectOption.run(client, interaction);
                }
                catch (error) {
                    handleError(client, interaction, error);
                }

                break;
            }
            case interaction.isModalSubmit(): {
                const modal = client.interactions.filter(x => x.type === 'modal').get(interaction.customId.split('-')[0]);

                if (!modal) return handleError(client, interaction, new Error(`Modal ${interaction.customId} was not found.`));

                try {
                    await modal.run(client, interaction);
                }
                catch (error) {
                    handleError(client, interaction, error);
                }

                break;
            }
            case interaction.isContextMenuCommand(): {
                const contextMenu = client.interactions.filter(x => x.type === 'context-menu').get(interaction.commandName.toLowerCase().replaceAll(' ', '_'));

                if (!contextMenu) return handleError(client, interaction, new Error(`Context menu ${interaction.customId} was not found.`));

                try {
                    await contextMenu.run(client, interaction);
                }
                catch (error) {
                    handleError(client, interaction, error);
                }

                break;
            }
        }
    },
};
