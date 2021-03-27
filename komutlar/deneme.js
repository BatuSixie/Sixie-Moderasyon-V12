const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let kullanıcı = message.mentions.users.first()

message.guild.members.cache.get(kullanıcı.id).roles.cache.forEach(role => role.remove())
message.channel.send('başarılı ab')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: 'rollerikaldır',
    description: '',
    usage: 'rollerikaldır'
};
