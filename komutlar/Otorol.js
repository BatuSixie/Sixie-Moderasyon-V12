const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()

if(!rol) {
const rolyok = new Discord.MessageEmbed()
.setColor('0x36393E')
.setDescription(`:x: Lütfen Bir Rol Etiketleyin.`)
.setFooter(message.author.username, message.author.avatarURL())
return message.channel.send(rolyok)
}
if(!kanal) {
const kanalyok = new Discord.MessageEmbed()
.setColor('0x36393E')
.setDescription(`:x: Lütfen Bir Kanal Etiketleyin.`)
.setFooter(message.author.username, message.author.avatarURL())
return message.channel.send(kanalyok)
}
db.set(`sixierol_${message.guild.id}`, rol.id)
db.set(`sixiekanal_${message.guild.id}`, kanal.id)
const tamamlandı = new Discord.MessageEmbed()
.setColor('0x36393E')
.setDescription(`✅ Otorol Başarıyla Ayarlandı. \n Ayarlanan Rol: **${rol}**\n Ayarlanan Kanal: **${kanal}**`)
.setFooter(message.author.username, message.author.avatarURL())
message.channel.send(tamamlandı)
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['otorolayarla'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'otorol',
    description: 'Otorolü ayarlarsınız.',
    usage: 'otorol'
  };