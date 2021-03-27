const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
    :x: Bu Komutu Kullanabilmen İçin Yönetici İznine Sahip Olmalısın.
    `))
let jailyetkili = message.mentions.roles.first()
if(!jailyetkili) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bir Rol Belirtmelisin.
`))

db.set(`jaily_${message.guild.id}`, jailyetkili.id)
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
✅ Rol Başarıyla Ayarlandı \n Ayarlanan Rol: **${jailyetkili}**
`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['jail-yetkili']
}

exports.help = {
    name: 'jailyetkili',
    description: 'Jail Yetkili Rolünü Ayarlarsınız.',
    usage: "jailyetkili"
}