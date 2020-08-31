const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.reply("Je moet wel in een voice channel zitten.");

    if(!message.guild.me.voice.channel) return message.reply("Ik zit nog niet in een voice channel. Sorry!");

    if(message.guild.me.voice.channelID != message.member.voice.channelID) return message.channel.send("Sorry! je zit niet bij mij in de channel.");

    message.guild.me.voice.channel.leave();

    message.channel.send("Ik ben weer vrij om muziek voor jullie te spelen.")

}



module.exports.help = {

    name: "leave",
    

}