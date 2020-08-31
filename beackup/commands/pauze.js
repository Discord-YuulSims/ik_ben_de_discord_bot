const discord = require("discord.js");

module.exports.run = async (client, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if (!guildIDData) return message.channel.send("Momenteel zijn er geen liedjes aan het spelen.");

    if (message.member.voice.channel != message.guild.me.voice.channel) return message.channel.send("Sorry! Je zit niet in de zelfde voice channel als mij.");

    if(guildIDData.dispatcher.paused) return message.reply("De Muziek staat al op pauze.");

    guildIDData.dispatcher.pause();

    return message.channel.send("De muziek staat nu op pauze.");

}



module.exports.help = {

    name: "stop",


}