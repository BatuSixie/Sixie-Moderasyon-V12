const Discord = require('discord.js')

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
:x: Gönderilecek Mesajı Belirtmelisin.
`))

message.guild.channels.cache.get(sixiekanal.id).send(sixiemesaj)
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
✅ Belirtilen Mesaj Belirtilen Kanala Gönderildi ! \n Gönderilen Kanal: **${sixiekanal}** \n Gönderilen Mesaj: **${sixiemesaj}** 
`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: []
}

exports.help = {
    name: 'mesajgönder',
    description: 'Belirtilen Kanala Belirtilen Mesajı Gönderir.',
    usage: "mesajgönder"
}