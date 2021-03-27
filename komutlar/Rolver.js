const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin \`Rolleri Yönet\` iznine Sahip Olmalısın`))
let rol = message.mentions.roles.first()
let kullanıcı = message.mentions.users.first()

if(!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Kullanıcı Belirtmelisin.`))
if(rol.length < 1) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Rol Belirtmelisin.`))

message.guild.members.cache.get(kullanıcı.id).roles.add(rol);
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Rol Başarıyla Verildi \n Verilen Kullanıcı: **${kullanıcı}**\n Verilen Rol: **${rol}**`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rol-ver'],
    permLevel: 0
}

exports.help = {
    name: 'rolver',
    description: 'Belirtilen Kullanıcıya Belirtilen Rolü Verir.',
    usage: "rolver"
}