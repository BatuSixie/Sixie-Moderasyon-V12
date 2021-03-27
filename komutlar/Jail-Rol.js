const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
    :x: Bu Komutu Kullanabilmen İçin Yönetici İznine Sahip Olmalısın.
    `))

    let jailrol = message.mentions.roles.first()
    if(!jailrol) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
    :x: Bir Rol Belirtmelisin.
    `))

    db.set(`jaile_${message.guild.id}`, jailrol.id)
    message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
    ✅ Jail Rolü Başarıyla Ayarlandı. \n Ayarlanan Rol: **${jailrol}** 
    `))
    message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['jail-rol']
}

exports.help = {
    name: 'jailrol',
    description: 'Jail Rolünü Ayarlarsınız.',
    usage: "jailrol"
}