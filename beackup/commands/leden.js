/*const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var ledenTotal = message.guild.memberCount;

    var Bots = message.guild.members.cache.filter(m => m.user.bot).size;

    var mernsen = ledenTotal - Bots;

    var online = message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size;

    var icon = message.guild.iconURL();

    var ledenEmbed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${message.author.tag}`, `${message.author.avatarURL({ size: 4096 })}`)
        .setThumbnail(icon)
        .addField("Leden:", ledenTotal, true)
        .addField("Mensen:", mernsen, true)
        .addField("Bots:", Bots, true)
        .addField("Online:", online, true);

    message.channel.send(ledenEmbed);


}



module.exports.help = {

    name: "leden",


}
*/