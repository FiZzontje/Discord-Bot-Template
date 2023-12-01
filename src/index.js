require('dotenv').config();// Use this to protect youre key 
const { Client, IntentsBitField, Presence } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        //IntentsBitField.Flags.GuildMessages,
        //IntentsBitField.Flags.MessageContent, 
    ],
});// you can add mode is you want!

client.on('ready', (c) => { //Logs in the console if youre bot is online or not // if this fail you will get errors! 
    console.log(`✅ ${c.user.tag} is online`);

});

//  client.on('messageCreate', (message) => { //Post a log in the console when someone sends a message in channels. You can block this code, it is intended for development work
//      console.log(message);
//  }); // if you want to use this code for logging in vs console log remove //<---- THis lines! 

/* client.on('messageCreate', (message) => { //Reply to message and reply's to 'Hi' 
    if (message.author.bot) {
        return;
    }

    if (message.content === 'hi') {
        message.reply('Hi there!');
    }
});// this code is buggy bot reply's 3 times on the same massage (Try to fix this soon!) */

client.login(process.env.TOKEN);