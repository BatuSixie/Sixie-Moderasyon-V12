const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bu Komutu Kullanabilmek İçim Yönetici İznine Sahip Olmalısın.
`))

message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
✅ Herkesin Banı Açıldı.
`))
message.react('✅')
const sixieall = await message.guild.fetchBans()
for(const sixie of sixieall.array()){
    await message.guild.members.unban(sixie.user.id)
};
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['herkesinbanınıaç','herkesin-banını-aç','herkesin-banı-aç'],
    permLevel: 3
};

exports.help = {
    name: 'herkesinbanıaç',
    description: 'Banlı Olan Herkesin Banını Açarsınız.',
    usage: 'herkesinbanıaç'
};