const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
let jaily = db.fetch(`jaily_${message.guild.id}`)
let jaillog = db.fetch(`jaillog_${message.guild.id}`)
let jailrol = db.fetch(`jaile_${message.guild.id}`)
if(!jaily) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`Jail Yetkilisi Ayarlanmamış!`))
if(!jaillog) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`Jail Log Kanalı Ayarlanmamış!`))
if(!jailrol) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`Jail Rolü Ayarlanmamış!`))
if(!message.member.roles.cache.has(jaily)) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bu Komutu Kullaanbilmek İçin <@&${jaily}> Rolünde Olmalısın.
`))

let kullanıcı = message.mentions.users.first()
let sebep = args.slice(1).join(" ")
if(!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bir Kullanıcı Etiketlemelisin.
`))
if(!sebep) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bir Sebep Belirtmelisin.
`))

message.guild.members.cache.get(kullanıcı.id).roles.add(jailrol) ///bunu silmeyin. !  Sixie ✘#0001
message.guild.members.cache.get(kullanıcı.id).roles.remove("SİLİNECEK ROL ID")
message.guild.members.cache.get(kullanıcı.id).roles.remove("SİLİNECEK ROL ID")
//Alt Alta daha fazla ekleyebilirsiniz. !  Sixie ✘#0001

message.react('✅')

message.guild.channels.cache.get(jaillog).send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
✅ Bir Kullanıcı Başarıyla Jail'e Atıldı! \n Jaile Atılan Kullanıcı: **${kullanıcı}** \n Jaile Atan Yetkili: **${message.author}** \n Verilen Rol: **<@&${jailrol}>**
`))

message.guild.members.cache.get(kullanıcı.id).send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
**${message.guild.name} Adlı Sunucuda **${sebep}** Sebebiyle Jail'e Atıldınız \n Sizi Jail'e Atan Kullanıcı: **${message.author}**
`))
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['jailat','jail-at']
}

exports.help = {
    name: 'jail',
    description: 'Belirlenen Kişiyi Jaile Atarsınız.',
    usage: "jail"
}