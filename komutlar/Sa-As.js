const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin Yönetici İznine Sahip Olmalısın.`))

const sixiesaas = args.join(` `);
if(!sixiesaas) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: !sa-as aç/kapat`))

if(sixiesaas == "aç") {
  if(!db.has(`sixiesaas_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setFooter(message.author.username, message.author.avatarURL()).setDescription(`:x: Sa-As Sistemi Zaten Açık.`))
db.set(`sixiesaas_${message.guild.id}`, `acik`) 
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setFooter(message.author.username, message.author.avatarURL()).setDescription(`✅ Sa-As Sistemini Başarıyla Açtım!`))
}

else if(sixiesaas == "kapat") {
  if(!db.has(`sixiesaas_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setFooter(message.author.username, message.author.avatarURL()).setDescription(`:x: Sa-As Sistemi Zaten Kapalı.`))
db.set(`sixiesaas_${message.guild.id}`,`kapali`)
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setFooter(message.author.username, message.author.avatarURL()).setDescription(`✅ Sa-As Sistemini Başarıyla Kapattım.`))
}
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [`saas`]
  };
  
  exports.help = {
    name: 'sa-as',
    description: 'Sa-As Sistemini Açıp Kapatırsınız.',
    usage: 'sa-as'
  };