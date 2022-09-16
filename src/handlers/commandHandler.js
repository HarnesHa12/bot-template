const { Collection } = require('discord.js');
const { readdirSync } = require('fs');
const path = require('path');

module.exports = (client) => {
    client.commands = new Collection();

    const dirs = readdirSync(path.join('./src/commands'));

    for (const dir of dirs) {
        const files = readdirSync(path.join('./src/commands', dir)).filter(x => x.endsWith('.js'));

        for (const file of files) {
            const command = require(`../commands/${dir}/${file}`);

            client.commands.set(command.data.name, command)
        }
    }
};