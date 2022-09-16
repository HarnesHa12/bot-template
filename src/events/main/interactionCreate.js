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
                const button = client.interactions.filter(x => x.type === 'button' && interaction.customId.includes(x.customId)).first();
                
                if (!button) return handleError(client, interaction, new Error(`Button ${interaction.customId} was not found.`));
                
                try {
                    await button.run(client, interaction);
                }
                catch (error) {
                    handleError(client, interaction, error);
                    interaction.reply({ content: 'Error' });
                }
            }
        }
    },
};