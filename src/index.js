require('dotenv').config();// Use this to protect you're key 
const { Client, IntentsBitField, Presence, ActivityType, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        //IntentsBitField.Flags.GuildMessages,
        //IntentsBitField.Flags.MessageContent, 
    ],
});// you can add more is you want!

client.on('ready', (c) => { //Logs in the console if you're bot is online or not // if this fail you will get errors! 
    console.log(`✅ ${c.user.tag} is online`);

    client.user.setActivity({
        name: "🌐 Dev mode by#️⃣fisy",
        type: ActivityType.Watching,

    })

});

 client.on('messageCreate', (message) => { //Post a log in the console when someone sends a message in channels. You can block this code, it is intended for development work
      console.log(message);
}); // if you want to use this code for logging in vs console log remove //<---- THis lines! 

 client.on('messageCreate', (message) => { //Reply to message and reply's to 'Hi' 
    if (message.author.bot) {
        return;
    }

    if (message.content === 'hi') {
        message.reply('Hi there!');
    }
});// this code is buggy bot reply's 3 times on the same massage (Try to fix this soon!) */

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey') { //hey command
        interaction.reply('hey there!!')
    }

    if (interaction.commandName === 'ping') {// ping command
        interaction.reply('Pong!')
    }

    if (interaction.commandName === 'developer') {
        const embed = new EmbedBuilder()
        .setTitle("Developer Links")
        .setDescription('https://linktr.ee/FishyDev')
        .setImage('https://cdn.discordapp.com/attachments/1146283420050272357/1181055487417004052/elite-amaranth.gif?ex=657faaa3&is=656d35a3&hm=38baf7930d6c1e5ed2048acbf728d428012e0fb9bf40d2c891c55cc37bafec17&')
        .setColor('Random')
        .addFields({ 
            name: 'Developer of this bot,',
            value: '@Fishy',
            inline: true,

        });
        interaction.reply({ embeds: [embed] });
    }
});


client.login(process.env.TOKEN);