const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Yardım Komutları')
.setTimestamp()
.addField('h!moderasyon', 'Moderasyon Komutları')
.addField('h!eğlence', 'Eğlence Komutları')
.addField('h!aboneyardım', 'Abone Rol Komutları')
.addField('h!botlistyardım', 'Botlist Komutları')
.addField('h!yönetim', 'Sunucuyu Yönetmek için gerekli olan komutlar')

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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
