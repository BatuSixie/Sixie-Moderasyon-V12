const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin ``Mesajları Yönet`` İznine Sahip Olmalısın. `))
if(!args[0]) {

    const belirtmedin = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setDescription(`:x: Temizlenecek Miktar Belirtmelisin.`)
    .setFooter(message.author.username, message.author.avatarURL())
    return message.channel.send(belirtmedin)
};
message.delete();

let sayı = Number(args[0]);
let sil = 0;

for (var i = 0; i < (Math.floor(sayı/100)); i++) {
message.channel.send.bulkDelete(100).then(r => sil+=r.size);

sayı = sayı-100;
};

if (sayı > 0)  message.channel.bulkDelete(sayı).then(r => sil+=r.size);

const silindi = new Discord.MessageEmbed()
.setColor('0x36393E')
.setDescription(`✅ **\`${args[0]}\` Adet Mesaj Silindi.**`)
.setFooter(message.author.username, message.author.avatarURL())
return message.channel.send(silindi)
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['temizle'],
    permLevel: 0,
};

exports.help = {
    name: 'sil', 
    description: 'Belirtilen Kadar Mesaj Siler.',
    usage: 'sil'
};