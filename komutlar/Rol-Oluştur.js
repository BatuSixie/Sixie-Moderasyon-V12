const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bu Komutu Kullanabilmek İçin Rolleri Yönet İznine Sahip Olmalısın.
`))

let rolad = args.slice(0).join(' ')
if(!rolad) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bir Rol Adı Belirtmelisin.
`))

message.guild.roles.create({ data: { name: `${rolad}` }, reason: 'Sixie Rol Oluştur Sistemi' }).then(role => {
    role.setColor('#ffffff');
    });
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
✅ Başarıyla Rol Oluşturuldu. \n Açılan Rol: **${rolad}**
`))
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rol-oluştur'],
    permLevel: 0
}

exports.help = {
    name: 'rololuştur',
    description: 'Belirtilen İsimde Rol Oluşturur.',
    usage: "rololuştur"
}