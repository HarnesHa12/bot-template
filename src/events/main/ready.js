const { Routes } = require('discord.js');
require('dotenv').config();

module.exports = {
    name: 'ready',
    run: async (client) => {
        await client.rest.put(Routes.applicationCommands(client.user.id), {
            body: client.commands.filter(cmd => !cmd.testOnly).map(cmd => cmd.data.toJSON()),
        });

        await client.rest.put(Routes.applicationCommands(client.user.id), {
            body: client.interactions.filter(x => x.type === 'context-menu').map(context => context.data.toJSON()),
        });

        await client.rest.put(Routes.applicationGuildCommands(client.user.id, process.env.TEST_GUILD_ID), {
            body: client.commands.filter(cmd => cmd.testOnly).map(cmd => cmd.data.toJSON()),
        });

        console.log(`Logged in as ${client.user.tag}!`);
        console.log(`Loaded ${client.commands.size} commands!`);
        console.log(`Loaded ${client.interactions.size} interactions!`);
    }
}