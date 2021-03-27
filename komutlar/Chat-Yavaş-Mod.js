const Discord = require('discord.js') //Sixie

exports.run = async(client, message,args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bu Komutu Kullanabilmen İçin Mesajları Yönet İznine Sahip Olmalısın.
`))

if(message.channel.type !== "text") return;
const yavaş = args[0] ? args[0] : 0;
if(!yavaş) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Bir Limit Belirtmelisin.
`))

let sayı = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",       ///Buraya Devam Ettirebilirsiniz. !  Sixie ✘#0001
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50"
];
if(!sayı.some(word => message.content.includes(word))) {
{
const sayıolmalı = new Discord.MessageEmbed()
.setColor('0x36393E')
.setDescription(`:x: Limit Sadece Sayı Olmalı.`)
return message.channel.send(sayıolmalı)
}}

if(yavaş > 50) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
:x: Süre Limiti Maksimum 50 Olabilir.
`))
message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription(`
✅ Yavaş Mod Başarıyla Ayarlanmıştır. \n Ayarlanan Limit: **${yavaş}**
`))
message.react('✅')

let request = require("request");
request({
  
url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
  
method: "PATCH",
  
json: {
  
rate_limit_per_user: yavaş
  
},
  
headers: {
  
Authorization: `Bot ${client.token}`
  
}
});

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yavaş-mod","slow-mode"],
    permLevel: 2
  };
  
  exports.help = {
    name: "yavaşmod",
    description: "Bulunduğun Kanala Yavaş Mod Ayarlarsınız.",
    usage: "yavaşmod"
  };