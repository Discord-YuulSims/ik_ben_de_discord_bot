const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var yst = message.guild.roles.cache.get('687322873781682225');
    var admin = message.guild.roles.cache.get('673117118744494080');
    var helper = message.guild.roles.cache.get('673116893149921310');
    var mute = message.guild.roles.cache.get('678544695613456404');
    var everyone = message.guild.roles.cache.get('673110339922952192');
    var owner = message.guild.roles.cache.get('724191942308790283');
    var kijkers = message.guild.roles.cache.get('673116519563001877');
    var yuulsims = message.guild.roles.cache.get('673117543778484234');
    var idee = message.member.guild.channels.cache.get("681076377587548202");
    var poll = message.member.guild.channels.cache.get("678554117119148052");



    const aembed = new discord.MessageEmbed()
        .setTitle(`**__De Regels!__**`)
        .setColor("#03fcfc")
        .setThumbnail("https://i.pinimg.com/564x/f6/e6/d6/f6e6d6cb4b531cea6ab36c18a05114e3.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`Er zijn in totaal 10 regels. Maar er zijn ook ongeschreven regels de standaart dingen. Hou u daar ook **A.U.B** aan \n Anders kunnen we je een warn geven. En dat is niet echt fijn \n **__Het ${yst} kan altijd de regels veranderen__** \n Die in een embed staan zijn de hoofd regels! Die er niet in staan zijn bijgevoegd door het ${yst}`);

    const bembed = new discord.MessageEmbed()
        .setTitle("**¨__1.Zelf promoot__**")
        .setColor("#f4fc03")
        .setThumbnail("https://i.pinimg.com/564x/81/cb/53/81cb53aa103925d84b61f37f8c1bc8db.jpg")
        .setFooter("©YuulSims Server")
        .setDescription("Het is niet **toegestaan** om **u zelf te promoten.** \n Zoals: sociale media accounts,YouTube kanalen, Discord servers en anderen eigen accounts. Want dit is **een server om mensen bijeen te brengen.** Dus dit is **geen server** voor te **promoten!**");

    const cembed = new discord.MessageEmbed()
        .setTitle("**__2.Spammen__**")
        .setColor("#fc0703")
        .setThumbnail("https://i.pinimg.com/564x/0b/b9/be/0bb9be894684dd464126d0042b04352b.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`Het is **niet toegestaan** om te spammen. \n Als een ${admin} of ${helper}  leden **zeggen** dat je spam dan **stop je ook!** Als je toch  blijft spammen, dan kan je een **officiële waarschuwing  krijgen.** Als het je niet **je eerste keer is** kan dat **een ban of worden ge${mute}**`);

    const dembed = new discord.MessageEmbed()
        .setTitle("**__3.Schelden__**")
        .setColor("#fc03d2")
        .setThumbnail("https://i.pinimg.com/564x/a0/4c/2e/a04c2ea23947605d35c3b684f1023d6f.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`Om **ruzie's de voorkomen schelden we niet. **Dat kan** spijtige genoeg heel hard aan komen!** We \n beschouwen** kanker** als een heel hard scheldwoord en levert meteen een ban of ${mute} op.`);

    const eembed = new discord.MessageEmbed()
        .setTitle("**__4.Taggen__**")
        .setColor("#03fc5e")
        .setThumbnail("https://i.pinimg.com/564x/5c/40/1e/5c401e98bccae7be3d4c82bed8097d18.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`Het is **niet toegestaan om** @here/${everyone}/${kijkers} **te taggen** alleen met **toestemming.** \n Wil je een rol taggen buiten ${kijkers} **mag dat gerust als je vragen hebt .** Als je iemand persoonlijk wil taggen mag dat maar als die ene aan heeft dat die **niet wil getagd** worden **doe je dat ook niet!**`);


    const fembed = new discord.MessageEmbed()
        .setTitle("**__5.Mensen met een rol__**")
        .setColor("#03fc8c")
        .setThumbnail("https://i.pinimg.com/564x/a5/71/0c/a5710cb0bed2afaccae59612dbff79dd.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`Er zijn mensen met een rang in deze server.** Je luister altijd naar:** ${yuulsims} en ${owner}. \n Mensen met de rol ${admin} kunnen een **officiële waarschuwing geven** en ook **een straf!** \n Mensen met de rol ${helper} mogen iets **zeggen wat je niet mag maar kunnen geen een officiële waarschuwing geven.** En ook **geen straf!**`);

    const gembed = new discord.MessageEmbed()
        .setTitle("**__6.geen rare/seksuele foto's in de chat__**")
        .setColor("#a903fc")
        .setThumbnail("https://i.pinimg.com/564x/33/ce/2a/33ce2a65994a66259ad9672ace065aa7.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`Wij laten **rare/seksuele foto's** niet toe in de chat. \n dit kan een** Ban, ge${mute}worden of zelfs gekickt worden. \n Hier zijn kinderen aanwezig dat weten we 100% zeker!**`);

    const hembed = new discord.MessageEmbed()
        .setTitle(`**__7.Beledigingen/pesterijen__**`)
        .setColor("#ffffff")
        .setThumbnail("https://i.pinimg.com/564x/f0/a2/f7/f0a2f79ab7ef83ed1a6392a9bab4cf10.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`Het **beledigen/pesterijen** van leden in de server is niet toegestaan. \n En zeker niet van ${yst}! \n  Daarvoor kom je niet in een server om te pesten. Wees gewoon vriendelijk en maakt er een gezeligge server van. `);

    const iembed = new discord.MessageEmbed()
        .setTitle(`**__8.Niet bemoeien met YuulSims  zaken__**`)
        .setColor("#03adfc")
        .setThumbnail("https://i.pinimg.com/564x/8c/7b/26/8c7b265c3b13808b86e5a1e10d030d45.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`We willen **niet** dat gewone ${kijkers} zich **bezig houden** met ${yst} zaken. \n Als je zo graag **wil helpen** in de server meldt je dan aan als ${helper} bij het formulier. **Suggesties** Zijn van harte welkom in ${idee}. We laten jullie soms stemmen in ${poll}`);

    const jembed = new discord.MessageEmbed()
        .setTitle(`**__9.Taal__**`)
        .setColor("#ff8400")
        .setThumbnail("https://i.pinimg.com/564x/8b/16/6d/8b166db1a69d6e4990a491fae5107a43.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`We willen dat** jullie Vlaams / Nederlands praten** in de server. Waarom omdat **iedereen het zo verstaan **en ${yuulsims} haar** kanaal is Nederlands.** Het is gewoon **makkelijker** voor Iedereen.`);

    const kembed = new discord.MessageEmbed()
        .setTitle(`**__10.Voorwaarden discord__**`)
        .setColor("#c3ff00")
        .setThumbnail("https://i.pinimg.com/564x/57/69/b0/5769b01d8f173bea626eec7ec2e25de2.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`We zouden het **op prijs stellen** dat je ook naar **de regels van discord luistert.** Want je bent **tensloten in discord**. Hier vindt u de link naar de discord regels: https://discordapp.com/terms`);

    const nembed = new discord.MessageEmbed()
        .setTitle(`**__Straffen__**`)
        .setColor("808080")
        .setThumbnail("https://i.pinimg.com/564x/c3/e9/79/c3e97993c7a1681815352b5d47e1c114.jpg")
        .setFooter("©YuulSims Server")
        .setDescription(`Er zijn natuurlijk ook straffen als je je niet aan de regels houdt! \n **1.warn** Krijg je eerst kan op lopen T.E.M. 3 warns! \n **2.ban** Kan oplopen tot 7 dagen daarna kan je terug komen met een link! \n **3.ge${mute}** Kan je een tijdje niks doen in de server. Kiezen wij hoelang dat loopt! \n **4.kicken** Word je verwijderd van de server. Met een link kan je er weer in!`)
        .addField("**hopelijk komen jullie het na!", `**MVG \n ${yst}**`)

    message.channel.send(aembed);
    message.channel.send(bembed);
    message.channel.send(cembed);
    message.channel.send(dembed);
    message.channel.send(eembed);
    message.channel.send(fembed);
    message.channel.send(gembed);
    message.channel.send(hembed);
    message.channel.send(iembed);
    message.channel.send(jembed);
    message.channel.send(kembed);
    message.channel.send(nembed);
}




module.exports.help = {

    name: "regels",


}