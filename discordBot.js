const Discord = require('discord.js')
const client = new Discord.Client()
const ytdl = require('ytdl-core');
const dotenv = require('dotenv')
dotenv.config();

client.once('ready', () => {
    console.log("Ready!");
})
client.login(process.env.TOKEN)


client.on('message', message => {
	if (message.content === "!daddy") {
        message.channel.send(`hey ${message.author.username}, cavell is your daddy`)
        console.log(message);
    }


});

// client.on('message', async(message) => {
//     if (!message.guild) return;
//
//     if (message.content === '!join') {
//   // Only try to join the sender's voice channel if they are in one themselves
//   if (message.member.voice.channel) {
//     const connection = await message.member.voice.channel.join();
//     connection.play('https://clips.twitch.tv/BelovedFilthyDugongDancingBanana-iPDhdUo9ccBTsD2e');
//
//
//   } else {
//     message.reply('You need to join a voice channel first!');
//   }
// }
// })
