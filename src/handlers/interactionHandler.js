const { Collection } = require('discord.js');
const { readdirSync } = require('fs');
const path = require('path');

module.exports = (client) => {
    client.interactions = new Collection();

    const dirs = readdirSync(path.join('./src/interactions'));

    for (const dir of dirs) {
        const types = readdirSync(path.join('./src/interactions', dir));

        for (const type of types) {
            const files = readdirSync(path.join('./src/interactions', dir, type)).filter(x => x.endsWith('.js'));

            for (const file of files) {
                const interaction = require(`../interactions/${dir}/${type}/${file}`);

                client.interactions.set(interaction?.data?.name?.toLowerCase()?.replaceAll(' ', '_') || interaction?.customId, interaction);
            }
        }
    }
};