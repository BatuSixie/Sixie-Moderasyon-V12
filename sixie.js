const Discord = require("discord.js")    //Sixie 
const client = new Discord.Client();      //Sixie 
const fs = require("fs");   //Sixie 
const jimp = require("jimp");    //Sixie 
const moment = require("moment"); //Sixie 
const express = require("express"); //Sixie 
const ms = require('parse-ms')
const app = express();  //Sixie 
const ayarlar = require('./ayarlar.json') //Sixie 
const db = require('quick.db')          //Sixie 
require('./util/Loader.js')(client);    //Sixie 

client.commands = new Discord.Collection(); //Sixie 
client.aliases = new Discord.Collection(); //Sixie 
fs.readdir("./komutlar/", (err, files) => { //Sixie 
  if (err) console.error(err); //Sixie 
  console.log(`${files.length} komut yüklenecek.`); //Sixie 
  files.forEach(f => { //Sixie 
    let props = require(`./komutlar/${f}`); //Sixie 
    console.log(`Yüklenen komut: ${props.help.name}.`); //Sixie 
    client.commands.set(props.help.name, props); //Sixie  
    props.conf.aliases.forEach(alias => { //Sixie  
      client.aliases.set(alias, props.help.name); //Sixie 
    });
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////AFK

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;
  if(await db.fetch(`afk_${message.author.id}`)) {
db.delete(`afk_${message.author.id}`)
db.delete(`afksüre_${message.author.id}`)
const afkçık = new Discord.MessageEmbed()
.setColor('0x36393E')
.setDescription(`${message.author} ✅ Afk Modundan Başarıyla Çıkıldı`)
.setFooter(message.author.username, message.author.avatarURL());
message.channel.send(afkçık);
  }
});

///////////////////////AFK

//////////////////////Otorol

client.on("guildMemberAdd", async member => {
let otorol = await db.fetch(`sixierol_${member.guild.id}`);
let otokanal = await db.fetch(`sixiekanal_${member.guild.id}`);

let rol1 = member.guild.roles.cache.get(otorol);
let kanal1 = member.guild.channels.cache.get(otokanal);

if(!rol1) return;
if(!kanal1) return;

const rolverildi = new Discord.MessageEmbed()
.setColor('0x36393E')
.setDescription(`✅ **${member}** Adlı Kişi Sunucuya Katıldı ! \`${rol1.name}\` Adlı Rol Verildi.`)
kanal1.send(rolverildi);
member.roles.add(rol1);
});

/////////////////////Otorol

/////////////////////Sa-As

client.on("message", async message => {
const sixiesaas = message.content.toLocaleLowerCase();

if (
sixiesaas === "selam" ||
sixiesaas === "sea" ||
sixiesaas === "selamun aleyküm" ||
sixiesaas === "selamın aleyküm" ||
sixiesaas === "slm" ||
sixiesaas === "sa"
) {
let sixie = await db.fetch(`sixiesaas_${message.guild.id}`)
if(sixie === "acik") return message.reply(`**Aleyküm Selam Hoşgeldin**`)
}
});

////////////////////Sa-AS

///////////////////Jail



/////////////////Jail

/////////Tag Alınca Rol Verme

client.on("userUpdate", async(eski,yeni) => {
if(eski.username !== yeni.username) {
if(!yeni.username.includes("Tag") && client.guild.cache.get("Sunucu id").members.cache.get(yeni.id).roles.cache.has("rol id")) {
client.guild.cache.get("sunucu id").members.cache.get(yeni.id).roles.remove("rol id")
client.channels.cache.get("kanal id").send(`${yeni} Adlı Kişi Tagımızı Aldı!`)
}
if(yeni.username.includes("tag") && !client.guilds.cache.get("sunucu id").members.cache.get(yeni.id).roles.cache.has("rol id")) {
client.channels.cache.get("kanal id").send(`${yeni} Adlı Kişi Tagımızı Çıkardı!`) 
////Mesajları İstediğiniz Gibi Ayarlayabilirsiniz. !  Sixie ✘ ・#0001
client.guild.cache.get("sunucu id").members.cache.get(yeni.id).roles.add("rolid")
}
}
})

/////////Tag Alınca Rol Verme

client.login(ayarlar.token);
