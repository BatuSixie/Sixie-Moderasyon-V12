const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR"))  return message.chanel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bu Komutu Kullanabilmek İçin Yönetici İznine Sahip Olmalısın.
`))

let verilcekrol = 
message.mentions.roles.first() ||
message.guild.roles.cache.get(args[0]) ||
message.guild.roles.cache.find(verilcekrol => verilcekrol.name === (args[0]))

if(!verilcekrol) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bir Rol Belirmelisin.
`))

message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
✅ Herkese Rol Verildi \n Verilen Rol: **${verilcekrol}**
`))

message.guild.members.cache.forEach(kullanıcılar => {
message.guild.members.cache.get(kullanıcılar.id).roles.add(verilcekrol)
})
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: 'herkeserolver',
    description: 'Belirtilen Rolü Herkese Verirsiniz.',
    usage: 'herkeserolver'
};
