const Discord = require('discord.js');
const client = new Discord.Client();
const binCalc = require('./binCalc');
const config = require('./config.json'); //cole sua token no arquivo config.json


client.once('ready', () => {
	console.log('Bot on!');
});
client.on('message', message => {
    let frase = message.content.slice(5);

	if (message.content.startsWith(`${config.prefix}bin`)) {
        message.channel.send(binCalc.binToDec(frase));
    }
    else if(message.content.startsWith(`${config.prefix}dec`)){
        message.channel.send(binCalc.decToBin(frase));
    }
    else if(message.content.startsWith(`${config.prefix}help`)){
        message.channel.send("comando !bin -número binário aqui- \n comando !dec -número decimal aqui-");
    }
    
    
});

client.login(config.token);