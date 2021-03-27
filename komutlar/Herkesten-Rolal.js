const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bu Komutu Kullanabilmek İçin Yönetici İznine Sahip Olmalısın.
`))

let alınacakrol =
message.mentions.roles.first() ||
message.guild.roles.cache.get(args[0]) ||
message.guild.roles.cache.find(alınacakrol => alınacakrol.name === (args[0]))

if(!alınacakrol) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bir Rol Belirtmelisin.
`))

message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
✅ Herkesten Rol Alındı \n Alınan Rol: **${alınacakrol}**
`))

message.guild.members.cache.forEach(kullanıcılar => {
message.guild.members.cache.get(kullanıcılar.id).roles.remove(alınacakrol)
})
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: 'herkestenrolal',
    description: 'Belirtilen Rolü Herkesten Alır.',
    usage: 'herkestenrolal'
};
