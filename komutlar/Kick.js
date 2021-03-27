const Discord = require('discord.js')

    exports.run = (client, message, args) => {

        if (!message.member.hasPermission("KICK_MEMBERS")){
            const yetkiyok = new Discord.MessageEmbed()
            .setDescription(`Bu Komutu Kullanabilmen İçin Üyeleyi At İznine Sahip Olmalısın`)
            .setColor('0x36393E')
            return message.channel.send(yetkiyok)
        }
        if(message.channel.type == "dm") return;
        let kullanici = message.mentions.members.first();
        let sebep = args.slice(1).join(' ');
        
        if(!kullanici){
            const kullanicihata = new Discord.MessageEmbed()
            .setDescription(`:x: Bir Kişi Etiketlemelisin.`)
            .setFooter(message.author.username, message.author.avatarURL())
            .setColor('0x36393E')
            return message.channel.send(kullanicihata)
        }
        if(!sebep){
            const sebephata = new Discord.MessageEmbed()
            .setDescription(`:x: Bir Sebep Belirtmelisin.`)
            .setFooter(message.author.username, message.author.avatarURL())
            .setColor('0x36393E')
            return message.channel.send(sebephata)
        }

        if(kullanici && sebep){
            kullanici.kick({reason: sebep})

            const banlandı = new Discord.MessageEmbed()
.setColor('0x36393E')
.setDescription(`${kullanici} Adlı Kullanıcı Başarıyla Atıldı!`)
.setFooter(message.author.username, message.author.avatarURL())
message.channel.send(banlandı)
}}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'kick',
    usage: "kick"
}