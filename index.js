//npm install -g ffmpeg-binaries
const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = "a.";
client.login("yo dawg wassup");

client.on('ready', () => {
  console.log('Running');
  client.user.setStatus("online");
  client.user.setGame("a.help");

});

client.on("message", (message) => {
  
  let everyone = message.guild.members.array();
  // Set the prefix
  let adminRole = message.guild.roles.find('name', 'Admin');
  let modRole = message.guild.roles.find('name', 'Chat Mod');
  let allowed = ["309845156696424458","218397146049806337","314024974174257152"];
  
  let songs = ["Music/Demons.wav","Music/OMINOUS.mp3","Music/Xenon.m4a","Music/.mp3","Music/Carbon.m4a","Music/Lotus Remix.m4a"];
  let bad = ["317361540007198720","301569408130875403","222123485336567808"];
  
  let ops = ["Howdy partner!", "Sup dood", "Hello", "Hey Man"];
  let op = ops[Math.floor(Math.random()*ops.length)];
  
  let jokes = ["How do all the oceans say hello to each other?\nWith waves!","What do you call a bear with no teeth?\nA gummy bear!","What do you call cheese that isn’t yours?\nNacho Cheese!","Where do cows go for entertainment?\nTo the moo-vies!","How do you know if there’s an elephant under your bed?\nYour head hits the ceiling!"];
  let joke = jokes[Math.floor(Math.random()*jokes.length)];
  
  let facts = ["Banging your head against a wall burns 150 calories an hour.","In the UK, it is illegal to eat mince pies on Christmas Day!","Pteronophobia is the fear of being tickled by feathers!","When hippos are upset, their sweat turns red.","A flock of crows is known as a murder.","The average woman uses her height in lipstick every 5 years.","''Facebook Addiction Disorder'' is a mental disorder identified by Psychologists.","29th May is officially ''Put a Pillow on Your Fridge Day''.","Cherophobia is the fear of fun.","Human saliva has a boiling point three times that of regular water.","If you lift a kangaroo’s tail off the ground it can’t hop.","Bananas are curved because they grow towards the sun.","Billy goats urinate on their own heads to smell more attractive to females.","The person who invented the Frisbee was cremated and made into frisbees after he died!","During your lifetime, you will produce enough saliva to fill two swimming pools.","King Henry VIII slept with a gigantic axe beside him.","An eagle can kill a young deer and fly away with it.","Heart attacks are more likely to happen on a Monday.","If you consistently fart for 6 years & 9 months, enough gas is produced to create the energy of an atomic bomb!","In 2015, more people were killed from injuries caused by taking a selfie than by shark attacks.","The top six foods that make your fart are beans, corn, bell peppers, cauliflower, cabbage and milk!"];
  let fact = facts[Math.floor(Math.random()*facts.length)];
  
  let embed = new Discord.RichEmbed();
  embed.setColor('#C0C0C0');
  
  let args = message.content.split(" ").splice(1);

  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "help")) {
    embed.addField('Common Commands:','a.hello `Returns Hello`\na.ping `Returns Pong`\na.add [Num1] [Num2]\na.sub [Num1] [Num2]\na.mult [Num1] [Num2]\na.div [Num1] [Num2]');
    embed.addField('Fun Commands','a.joke `Returns Random Joke`\na.fact `Returns Random Fact`\na.chez');
    embed.addField('Music Commands','a.play song\na.skip');
    embed.addField('Moderator Commands','a.kick [user]\na.ban [user]\na.delete [number of messages]\na.verify [user]');
    message.channel.sendEmbed(embed);
    //message.channel.send();
  } else
  if (message.content.startsWith(prefix + "add")) {
    let num1 = parseInt(args[0]);
    let num2 = parseInt(args[1]);
    message.channel.send(num1 + num2);
  } else
  if (message.content.startsWith(prefix + "sub")) {
    let num1 = parseInt(args[0]);
    let num2 = parseInt(args[1]);
    message.channel.send(num1 - num2);
  } else
  if (message.content.startsWith(prefix + "mult")) {
    let num1 = parseInt(args[0]);
    let num2 = parseInt(args[1]);
    message.channel.send(num1 * num2);
  } else
  if (message.content.startsWith(prefix + "div")) {
    let num1 = parseInt(args[0]);
    let num2 = parseInt(args[1]);
    message.channel.send(num1 / num2);
  } else
  if (message.content.startsWith(prefix + "hello")) {
    message.channel.send(op);
  } else
  if (message.content.startsWith(prefix + "joke")) {
    message.channel.send(joke);
  } else
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong");
  } else 
  if (message.content.startsWith(prefix + "pow")) {
    for(var i = 0; i > bad.length; i++){
      if (message.channel.id !== bad[i]) {
        setInterval(function() {
          message.channel.send("Pow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow\nPow");
        }, 1000);
      }
    }
  } else 
  if (message.content.startsWith(prefix + "play song")) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          const dispatcher = connection.playFile(songs[3]);
          dispatcher.on('end', reason => {
            message.member.voiceChannel.leave();
          });
        });
        

    } else {
      message.reply('You need to join a voice channel first!');
    }
  } else 
  if (message.content.startsWith(prefix + "fact")) {
    message.channel.send(fact);
  } else
  if (message.content.startsWith(prefix + "chez")) {
    message.channel.send(":cheese:");
  } else
  if (message.content.startsWith(prefix + "delete")) {
    if (message.member.roles.exists("name", "Admin") || message.member.roles.exists("name", "Moderator") || message.member.roles.exists("name", "Helper")){
      let amount = parseInt(args[0]);
      if(amount > 1){
        message.channel.bulkDelete(amount + 1);
      } else {
        message.channel.bulkDelete(amount + 1);
      }
    } else {
      message.channel.send("You do not have permissions to use this command.");
      
    }
  } else
  if (message.content.startsWith(prefix + "kick")) {
      if (message.member.roles.exists("name", "Admin") || message.member.roles.exists("name", "Moderator") || message.member.roles.exists("name", "Helper")){
        message.mentions.members.first().kick();
        return;
      } else {
        message.channel.send("You do not have permissions to use this command.");
        return;
      }
  } else
  if (message.content.startsWith(prefix + "ban")) {
    if (message.member.roles.exists("name", "Admin") || message.member.roles.exists("name", "Moderator") || message.member.roles.exists("name", "Helper")){
      message.mentions.members.first().ban();
    } else {
      message.channel.send("You do not have permissions to use this command.");
    }
  } else
  if (message.content.startsWith(prefix + "verify")) {
    if(message.member.roles.exists("name", "Admin") ||  message.member.roles.exists("name", "Moderator") || message.member.roles.exists("name", "Helper"))
    message.guild.member(message.mentions.users.first()).addRole(message.guild.roles.find("name", "Verified"));
    message.delete(1);
  } else
  if (message.content.startsWith(prefix + "agree") && message.channel.id === "321662852169596928") {
    message.member.addRole(message.guild.roles.find("name", "Verified"));
    message.member.removeRole(message.guild.roles.find("name", "Unverified"));
    message.channel.send("Verified!");
  } else
  if(message.content.startsWith(prefix)){
    embed.addField('Error','Please use a.help to see a list of all the commands.');
    message.channel.sendEmbed(embed);
  }
  

});
client.on('guildMemberAdd', (member) => {
    if(member.guild.id === "301569408130875403"){
      member.addRole(member.guild.roles.find("name", "Unverified"));
    }
});
