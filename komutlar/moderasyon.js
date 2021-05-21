const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» HeroBot Moderasyon Komutları')
.setTimestamp()
.addField('h!ban', 'Ban atarsınız')
.addField('h!byetkilirol', 'Ban yetkilirol ayarlar')
.addField('h!banlog', 'Banlog ayarlar')
.addField('h!rol-ver', 'Kullanıcıya belirtilen rolü verir')
.addField('h!reklamengel', 'Reklam Engel ayarlar')
.addField('h!everhereengel', 'Ever Here Engel ayarlar')
.addField('h!capsengel', 'Capsengel ayarlar')
.addField('h!kick', 'Kick Atarsınız')
.addField('h!afk', 'Afk Sistemi')
.addField('h!userinfo', 'Kullanıcı Bilgi')
.addField('h!kicklog', 'Kick Logunu Ayarlarsınız')
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};