const Discord = require("discord.js");
const config = require('../ayarlar.json');

module.exports = (client) => {

  var oynuyorkısımları = [
"Sixie",
"Arvie",
"Sixie",
"Arvie"
  ] ////////Parantezlerin içerisine oynuyor mesajları ekleyebilirsin !  Sixie ✘#0001
  
  
  setInterval(function() {
  
          var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
         client.user.setActivity("İyi Günlerde Kullan :) Sixie ❤ Arvie");
          }, 5 * 5000); ////////////////Burdan kaç sanyiyede bir durum değişeceğin ayarlarsınız !  Sixie ✘#0001
  
      console.log("Bot başarı ile giriş yaptı.")
  }