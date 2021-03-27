const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
let sebep = args.slice(0).join("  ");
const afksebep = new Discord.MessageEmbed()
.setColor('0x36393E')
.setDescription(`:x: Afk olabilmen için bir sebep belirtmen gerek.`)
.setFooter(message.author.username, message.author.avatarURL())
if(!sebep) return message.channel.send(afksebep)

db.set(`afk_${message.author.id}`, sebep)
db.set(`afksüre_${message.author.id}`, Date.now());

const afk = new Discord.MessageEmbed()
.setColor('0x36393E')
.setDescription(`✅ Başarıyla Afk Moduna Girdiniz. \n Afk Olma Sebebiniz : **${sebep}**`)
.setFooter(message.author.username, message.author.avatarURL())
message.channel.send(afk)
message.react('✅')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["afkol"],
    permLevel: 0
  };
   
  exports.help = {
    name: 'afk',
    description: 'Bu Komut İle Afk Olursunuz.',
    usage: 'afk'
  };