const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bu Komutu Kullanabilmek İçin Mesajları Yönet İznine Sahip Olmalısın.
`))
let oylamasoru = args.slice(0).join(' ')

if(!oylamasoru) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Oylamanın Ne Olacağını Belirtmelisin.
`))
message.react('✅')
message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL()).setFooter(message.author.username).setColor('0x36393E')
.addField(`**Oylama**`,`**${oylamasoru}**`)).then(function(message) {
message.react('✅')
message.react('❌')
})
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['oylamayap'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'oylama',
    description: 'Oylama Yaparsınız.',
    usage: 'oylama'
  };