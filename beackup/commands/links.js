const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var linkjesEmbed = new discord.MessageEmbed()
    .setTitle("Linkjes van YuulSims.")
    .setDescription(`[Klik hier](www.youtube.com)`)
    .addField('test', "https://i.stack.imgur.com/Ke92A.png")

    message.channel.send(linkjesEmbed)
}



module.exports.help = {

    name: "linkjes",
    

}