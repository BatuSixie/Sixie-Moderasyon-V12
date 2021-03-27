const Discord = require('discord.js')

exports.run = async(client, message, args) => {
let tagdakiler = 0;
let tag = "Tagınızı Yazınız.";

message.guild.members.cache.forEach(member => {
    if(member.user.username.includes(tag)) {
        tagdakiler = tagdakiler+1
    }
})

const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;

for(const [id, voiceChannel] of voiceChannels) count+= voiceChannel.members.size;
const sixiesay = new Discord.MessageEmbed()
.setFooter(message.author.username, message.author.avatarURL())
.setColor('0x36393E')
.addField(`Ses Kanalında Bulunan Kişi Sayısı`,`${count}`)
.addField(`Sunucuda Bulunan Kişi Sayısı`,`${message.guild.memberCount}`)
.addField(`Tagda Bulunan Kişi Sayısı`,`${tagdakiler}`)
message.channel.send(sixiesay)
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'say',
    description: 'Sunucudaki, Sesteki ve Tagdaki Kişi Sayısını Söyler.',
    usage: 'say'
  };;