const discord = require("discord.js");

module.exports.run = async (client, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if (!guildIDData) return message.channel.send("Momenteel zijn er geen liedjes aan het spelen.");

    if (message.member.voice.channel != message.guild.me.voice.channel) return message.channel.send("Sorry! Je zit niet in de zelfde voice channel als mij.");

    if (message.member.hasPermission("KICK_MEMBERS")) {

        message.channel.send("Opweg naar de volgend plaat!");

        // Roep in de dispatcher finish op.
        return guildIDData.dispatcher.emit("finish");

    }

    // Het aantal members opvragen in het spraakkanaal.
    var amountUsers = message.member.voice.channel.members.size;

    // Berekenen hoe veel er nodig zijn om te stemmen voor het skippen.
    var amountSkip = Math.ceil(amountUsers / 2);

    // We moeten de data toevoegen aan onze al bestaande data daarom gaan we een array aanmaken met de id's van de users die al gevote hebben.
    if (!guildIDData.queue[0].voteSkips) guildIDData.queue[0].voteSkips = [];

    // Als je al eens gestemd hebt mag je niet meer stemmen.
    if (guildIDData.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry je hebt al eens gevote. ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`);

    // Data toevoegen aan de array.
    guildIDData.queue[0].voteSkips.push(message.member.id);

    // Updaten van de data.
    options.active.set(message.guild.id, guildIDData);

    // Nakijken als we kunnen skippen.
    if (guildIDData.queue[0].voteSkips.length >= amountSkip) {

        message.channel.send("Opweg naar de volgend plaat!");

        // Roep in de dispatcher finish op.
        return guildIDData.dispatcher.emit("finish");

    }

    message.channel.send(`Tegevoegd van skip aanvraag. ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`);

}



module.exports.help = {

    name: "skip",


}