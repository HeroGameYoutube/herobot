const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Botlist Yardım Komutları')
.setTimestamp()
.addField('h!bot-onayla botid sahipid ', 'Botu Onaylarsınız')
.addField('h!bot-reddet botid sahipid sebep', 'Botu Reddedersiniz')
.addField('h!bot-ekle', 'Bot eklersiniz')
.addField('h!botlist-ayar', 'Ayarlama Komutlarını Gösterir')
.setImage('')
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
  name: 'botlistyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};