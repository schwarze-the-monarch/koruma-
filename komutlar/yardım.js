const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .addField(`İşte Komutlarım!`, `
<a:715613352822571138:740220460285034506>${prefix}antiraid aç
<a:715613352822571138:740220460285034506>${prefix}capsengel aç
<a:715613352822571138:740220460285034506>${prefix}emojikoruma aç
<a:715613352822571138:740220460285034506>${prefix}everengel aç
<a:715613352822571138:740220460285034506>${prefix}kanalkoruma aç
<a:715613352822571138:740220460285034506>${prefix}küfürengel aç
<a:715613352822571138:740220460285034506>${prefix}modlog #kanal
<a:715613352822571138:740220460285034506>${prefix}reklamengel aç
<a:715613352822571138:740220460285034506>${prefix}rolkoruma aç
<a:715613352822571138:740220460285034506>${prefix}sohbet-aç
<a:715613352822571138:740220460285034506>${prefix}sohbet-kapat
<a:715613352822571138:740220460285034506>${prefix}sil-üye @üye miktar
<a:715613352822571138:740220460285034506>${prefix}sil miktar
<a:715613352822571138:740220460285034506>${prefix}yavaşmod süre
<a:715613352822571138:740220460285034506>${prefix}ban @üye sebep
<a:715613352822571138:740220460285034506>${prefix}kick @üye sebep             
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
//DÜZENLENECEK