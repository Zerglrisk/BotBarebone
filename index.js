require('dotenv').config();

const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS] });

console.log('Beep beep!');

client.login(process.env.DISCORD_BOT_TOKEN);

client.once('ready', () => { console.log(`${client.user.username} is online.`); });
client.on('message', async (msg)=> {
	if (msg.author.bot) return;

	await msg.reply('replay');
});
