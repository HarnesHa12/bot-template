const { Client, GatewayIntentBits, REST } = require('discord.js');
require('dotenv').config();

module.exports = class ExampleClient extends Client {
    constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds,
            ]
        })
    }

    init() {
        this.login(process.env.TOKEN);

        ['errorHandler.js', 'interactionHandler.js', 'eventHandler.js', 'commandHandler.js'].forEach(x => require(`../handlers/${x}`)(this));

        this.rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    }
};