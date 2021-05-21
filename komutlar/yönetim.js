const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Yönetim Komutları')
.setTimestamp()
.addField('h!ban', 'Ban atarsınız')
.addField('h!sayaç', 'Sayaç Sistemi')
.addField('h!rol-ver', 'Kullanıcıya belirtilen rolü verir')
.addField('h!rol-al', 'Kullanıcıdan belirtilen olü alır')
.addField('h!modlog', 'Modlog sistemi')
.addField('h!reklamengel', 'Reklam Engel ayarlar')
.addField('h!everhereengel', 'Ever Here Engel ayarlar')
.addField('h!capsengel', 'Capsengel ayarlar')
.addField('h!kick', 'Kick Atarsınız')
.setImage("")
.setFooter('HeroBot', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yönetim',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};