const Discord = require('discord.js')
////Anlamayanlar İçin,
//Belirtilen Kanala Belirtilen Mesajı Sürekli Tekrarlar. !  Sixie ✘#0001

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bu Komutu Kullanabilmek İçin Mesajları Yönet İznine Sahip Olmalısın.
`))

let sixiekanal = message.mentions.channels.first()
let sixiemesaj = args.slice(1).join(' ')

if(!sixiekanal) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bir Kanal Belirtmelisin.
`))

if(!sixiemesaj) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bir Mesaj Belirtmelisin.
`))

message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
✅ Belirtilen Mesaj Belirtilen Kanala Başarıyla Yazılıyor. \n Gönderilen Kanal: **${sixiekanal}** \n Gönderilen Mesaj: **${sixiemesaj}**
`))
message.react('✅')

setInterval(() => {
    client.channels.cache.get(sixiekanal.id).send(sixiemesaj)
    }, 5000) //////Burayı Ayarlayabilirsiniz 1000 = 1 saniye
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'süreklitekrarla',
    description: 'Belirtilen Kanala Belirtilen Mesajı Sürekli Tekrarlar.',
    usage: "süreklitekrarla"
}