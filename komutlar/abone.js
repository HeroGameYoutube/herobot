const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField(' HeroBot',`
HeroBot Abone Yardım Menüsü  <a:maviyildiz:793539752858877952>

**g!abonerol** 
Abone Rolünü ayarlarsınız

**h!abonelog** 
Abone Log'u ayarlarsınız

**h!abone-y-rol** 
Abone Yetkili Rolü Ayarlarsınız

**h!abone** 
Abone rolü verirsiniz
`)
.setImage("")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'aboneyardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};