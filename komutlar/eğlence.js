const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Eğlence Komutları')
.setTimestamp()
.addField('h!ilginçbilgi', 'İlginç bilgi verir')
.addField('h!kartopu', 'Karopu Atarsın')
.addField('h!oylama', 'Oylama Yaparsınız')
.addField('h!espri', 'Espri Yaparsınız')
.addField('h!adamasmaca', 'Adam Asmaca oynarsınız')
.addField('h!emojiekle', 'Emoji Ekler')
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};