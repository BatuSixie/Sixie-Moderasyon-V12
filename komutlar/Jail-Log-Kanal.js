const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
    :x: Bu Komutu Kullanabilmen İçin Yönetici İznine Sahip Olmalısın.
    `))

    let jailkanal = message.mentions.channels.first()
    if(!jailkanal) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
    :x: Bir Kanal Belirtmelisin.
    `))

    db.set(`jaillog_${message.guild.id}`, jailkanal.id)
    message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
    ✅ Jail Kanalı Ayarlandı. \n Ayarlanan Kanal: **${jailkanal}**
    `))
    message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['jail-log','jail-kanal','jailkanal']
}

exports.help = {
    name: 'jaillog',
    description: 'Jail Log Kanalını Ayarlarsınız.',
    usage: "jaillog"
}