const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin \`Rolleri Yönet\` iznine Sahip Olmalısın`))
let kullanıcı = message.mentions.users.first()
let rol = message.mentions.roles.first()

if(!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Kullanıcı Belirtmelisin.`))
if(rol.length < 1) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Rol Belirtmelisin.`))

message.guild.members.cache.get(kullanıcı.id).roles.remove(rol)
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Rol Başarıyla Alındı \n Alınan Kullanıcı: **${kullanıcı}**\n Alınan Rol: **${rol}**`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rol-al'],
    permLevel: 0
}

exports.help = {
    name: 'rolal',
    description: 'Belirtilen Kullanıcıdan Belirtilen Rolü Alır.',
    usage: "rolal"
}