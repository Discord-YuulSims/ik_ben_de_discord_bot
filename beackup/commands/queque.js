const discord = require("discord.js");

module.exports.run = async (client, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if (!guildIDData) return message.channel.send("Momenteel zijn er geen liedjes aan het spelen.");

    var queue = guildIDData.queue;
    var nowPlaying = queue[0];

    var response = `Nu aan het spelen ${nowPlaying.songTitle}. || Aangevraagd door ${nowPlaying.requester}. \n\n**queue:** \n`;

    for (let index = 0; index < queue.length; index++) {

        response += `${index}, ${queue[index].songTitle} aangevraagd door ${queue[index].requester} \n`;
    }

    response += "\nVeel luister plezier!"

    message.channel.send(response);
}



module.exports.help = {

    name: "queue"


}