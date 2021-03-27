const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:X:Bu Komutu Kullanabilmen İçin ``Kullanıcı Adlarını Yönet`` İznine Sahip Olmalısın.`))

let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bir Kullanıcı Belirtmelisin.`))

let isim = args.slice(1).join(' ')
if(!isim) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Değiştirilecek İsmi Belirtiniz.`))

message.guild.members.cache.get(kullanıcı.id).setNickname(`${isim}`)
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`${kullanıcı} Adlı Kişinin İsmi Değiştirildi. \n Değiştirilen İsim: **${isim}**`))
message.react('✅')
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['isimdeğiştir']
};

exports.help = {
    name: 'isim-değiştir',
    description: 'Belirtilen Kullanıcının İsmini Değiştirirsiniz.',
    usage: 'isim-değiştir'
};