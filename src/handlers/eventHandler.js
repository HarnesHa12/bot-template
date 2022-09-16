const { readdirSync } = require('fs');
const path = require('path');

module.exports = (client) => {
    const dirs = readdirSync(path.join('./src/events'));

    for (const dir of dirs) {
        const files = readdirSync(path.join('./src/events', dir)).filter(x => x.endsWith('.js'));

        for (const file of files) {
            const event = require(`../events/${dir}/${file}`);

            client.on(event.name, async (...args) => await event.run(client, ...args));
        }
    }
};