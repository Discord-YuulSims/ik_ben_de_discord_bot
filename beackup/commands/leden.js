const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var ledenTotal = message.guild.memberCount;

    var Bots = message.guild.members.cache.filter(m => m.user.bot).size;

    var mernsen = ledenTotal - Bots;

    var online = message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle");

    var ledenEmbed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${message.guild.name}`, `${message.guild.avatarURL({ size: 4096 })}`)
        .addField("Leden:", ledenTotal, true)
        .addField("Mensen:", mernsen)
        .addField("Bots:", Bots, true)
        .addField("Online:", online, true);

    message.channel.send(ledenEmbed);


}



module.exports.help = {

    name: "leden",


}