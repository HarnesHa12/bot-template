const { BaseInteraction, EmbedBuilder } = require('discord.js');

module.exports = (client, interaction, error) => {
    const errorEmbed = new EmbedBuilder()
        .setDescription(`\`/${interaction?.commandName || 'Null'}\` | \`${interaction?.guild?.name || 'Null'}\` | \`${interaction?.guild?.id || 'Null'}\`\n\`\`\`js\n${error.stack.slice(0, 4096)}\n\`\`\``)
        .setColor('Red')
        .setTimestamp();

    const channel = client?.channels?.cache?.get(process.env.ERRORS_CHANNEL_ID);

    if (!process.argv.includes('--dev')) channel?.send({ embeds: [errorEmbed] });

    console.log(`Error caught:\n${error.stack}`);

    if (interaction instanceof BaseInteraction) {
        if (interaction.deferred || interaction.replied) {
            return interaction.editReply({ content: 'Error' });
        }
        else {
            return interaction.reply({ content: 'Error' });
        }
    }
};