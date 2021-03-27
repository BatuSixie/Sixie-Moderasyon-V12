const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
if(message.author.id !== message.guild.owner.id) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bu Komutu Kullanabilmek İçin Kurucu Olmalısınız.
`))
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
✅ Başarıyla Tüm Ayarlar Silindi! \n Silen Kişi: **${message.author}**
`))

db.delete(`jaillog_${message.guild.id}`)
db.delete(`jaily_${message.guild.id}`)
db.delete(`jaile_${message.guild.id}`)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['jail-sıfırla']
}

exports.help = {
    name: 'jailsıfırla',
    description: 'Jailin Tüm Ayarlarını Sıfırlarsınız.',
    usage: "jailsıfırla"
}