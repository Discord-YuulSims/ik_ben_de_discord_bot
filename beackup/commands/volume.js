const discord = require("discord.js");

module.exports.run = async (client, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if (!guildIDData) return message.channel.send("Momenteel zijn er geen liedjes aan het spelen.");

    if (message.member.voice.channel != message.guild.me.voice.channel) return message.channel.send("Sorry! Je zit niet in de zelfde voice channel als mij.");

    if(isNaN(args[0]) || args[0] > 150 || args[0]< 0) return message.reply("Gelieve een nummer te geven tussen 0 - 150.");

    guildIDData.dispatcher.setVolume(args[0] / 100);

    return message.channel.send(`Volume aangepast naar ${args[0]}`);

}



module.exports.help = {

    name: "volume",


}