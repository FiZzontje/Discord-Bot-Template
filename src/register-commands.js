require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },
    {
        name: 'ping',
        description: 'Replies with Pong if the bot is online!',
    },
    {
        name: 'developer',
        description: 'Get the developer info!',
    },
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('registering slash commands..');


        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }

        );

        console.log('slash commands successfull..');
    } catch (error) {
        console.log(`error: ${error}`);
    }

})();