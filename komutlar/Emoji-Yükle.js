const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bu Komutu Kullanabilmek İçin Emojileri Yönet İznine Sahip Olmalısın.
`))

let link = args[0];
let isim = args[1]

if(!link) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bir Emoji Linki Belirtmelisin.
`))

if(!isim) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bir İsim Belirtelisin.
`))

message.guild.emojis.create(link, isim)

message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
✅ Emoji Başarıyla Oluşturuldu. \n Oluşturulan Emoji: **${isim}**
`))

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: 'emojioluştur',
    description: 'Emoji Oluşturursunuz.',
    usage: 'emojioluştur'
};
