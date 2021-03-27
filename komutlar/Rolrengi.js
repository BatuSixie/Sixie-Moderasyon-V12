const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin \`Rolleri Yönet\` iznine Sahip Olmalısın`))
let rol = message.mentions.roles.first()
let renk = args.slice(1).join(" ")

if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Rol Belirtmelisin.`))
if(!renk) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Renk Belirtmelisin.`))

message.guild.roles.cache.get(rol.id).setColor(renk)
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Rolün Rengi Başarıyla Değiştirildi. \n Değiştirilen Rol: **${rol}**\n Renk Kodu: **${renk}**`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rol-rengi'],
    permLevel: 0
}

exports.help = {
    name: 'rolrengi',
    description: 'Belirtilen Rolün Rengini Değiştirirsiniz.',
    usage: "rolrengi"
}