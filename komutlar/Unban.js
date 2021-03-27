const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Bu Komutu Kullanabilmen İçin \`Üyeleri Banla\` iznine Sahip Olmalısın`))
const kullanıcı = message.mentions.users.first()
let member = kullanıcı || args[0]

let banlılar = await message.guild.fetchBans(true)
let banlımember = banlılar.find(m => `${m.user.username}#${m.user.discriminator}` === member || m.user.id === member)
let sebep = args.slice(1).join(' ')
if(!banlımember) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`:x: Banı Açılacak Bir Üye Belirtmelisin`))
if(!sebep) sebep = "Bir Sebep Belirtilmedi."
try{
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`✅ Kullanıcının Banı Başarıyla Kaldırıldı. \n Kaldırılan Üye: **${banlımember.user}**\n Kaldıran Yetkili: **${message.author}** \n Sebep: **${sebep}**`))
message.guild.members.unban(banlımember.user)
}catch(err){   
    console.log(err.message)
  }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'unban',
    description: 'Belirtilen Kullanıcının Banını Açar.',
    usage: 'unban'
  }; 