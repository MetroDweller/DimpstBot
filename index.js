var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: "NDQ3NDI0MDQ4MzMxNDg5Mjky.DeJSiA.clrBOHJCi5fliHkEFkEgz_Y_BnQ",
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'pong!'
                });
            break;
            case 'neck':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ooooh neck yourself!'
                });
            break;
            case 'hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Fuck you!'
                });
            break;

            	
            // Just add any case commands if you want to..
         }
     }
});

/*
function rps(){
	bot.on('message', function (user, userID, channelID, message, evt){
		if (message.substring(0, 1) == '!') {
       	   var args = message.substring(1).split(' ');
           var cmd = args[0];
           args = args.splice(1);

           switch(cmd) {
               // !rock
               case 'rock':
                   bot.sendMessage({
                       to: channelID,
                       message: 'Scizzors!'
                  });
                   bot.sendMessage({
                   		to: channelID
                   		message: 'Actually, I mean paper'
                   });
                   bot.sendMessage({
                   		to: channelID
                   		message: 'You lose!'
                   });
                break;

               case 'paper':
                   bot.sendMessage({
                       to: channelID,
                       message: 'Rock!'
                  });
                   bot.sendMessage({
                   		to: channelID
                   		message: 'Actually, I mean scizzors'
                   });
                   bot.sendMessage({
                   		to: channelID
                   		message: 'You lose!'
                   }) 
                break;

               case 'scizzors':
                   bot.sendMessage({
                       to: channelID,
                       message: 'Paper!'
                  });
                   bot.sendMessage({
                   		to: channelID
                   		message: 'Actually, I mean rock'
                   });
                   bot.sendMessage({
                   		to: channelID
                   		message: 'You lose!'
                   })      
                break;                         
            }
	}	}
}
*/
