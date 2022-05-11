const keepAlive = require("./server");
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const express = require("express");
const Discord = require('discord.js-self')
const client = new Discord.Client()
const app = express();
const prompt = require("prompt-sync")();
app.listen((ee) => console.log("Server started"));
app.use('/', (req, res) => {res.send(new Date());});
const chalk = require('cli-color');

let e = `

██████╗░██████╗░░█████╗░███╗░░░███╗░█████╗░███╗░░██╗
██╔══██╗██╔══██╗██╔══██╗████╗░████║██╔══██╗████╗░██║
██████╔╝██████╔╝██║░░██║██╔████╔██║███████║██╔██╗██║
██╔═══╝░██╔══██╗██║░░██║██║╚██╔╝██║██╔══██║██║╚████║
██║░░░░░██║░░██║╚█████╔╝██║░╚═╝░██║██║░░██║██║░╚███║
╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝
`
console.log(chalk.green(e))

const token = prompt("What is your account token without \"\":");

var servercopy = prompt("What is the server ID you want to copy :");

var serverpaste = prompt("What is the server ID you want to paste a copy into :");


client.on('ready',async()=>{
  console.log(client.user.username+' Successfully Logged in!')
})
client.on('message',message=>{
  const get = client.guilds.cache.get(servercopy)
  if(message.content.toLowerCase() === "-channels"){
    message.guild.channels.cache.forEach(channel=>{
      channel.delete()
    })
  };if(message.content.toLowerCase() === "-roles"){
    message.guild.roles.cache.forEach(role=>{
      role.delete()
    })
  }; if(message.content.toLowerCase()=== "=channels"){
    get.channels.cache.forEach(channel=>{
    message.guild.channels.cache.forEach(cha => {
       const par = message.guild.channels.cache.find(r=> r.name == channel.parent.name)
         if(!par)return ; 
        cha.setParent(par)
})
    })
  };if(message.content.toLowerCase() == "+channels"){
      const get = client.guilds.cache.get(servercopy)
  const got = client.guilds.cache.get(serverpaste)
  if(get){
    get.roles.cache.map(role=>{
      got.roles.create(role.name, { type: role.type, permissions:[role.permissions]}).catch((err)=>{
        console.log(`sso`)
        })
    })
     if(!get||!got||!token.length < 8||!servercopy.length < 8 ||!serverpaste.length < 8) new Error(`Eroor: cheak the inputs or your token or servers ID `)

      get.channels.cache.map(channel => {
        if(channel.type === 'text'){
          got.channels.create(channel.name, { type: 'text'  })
        };if(channel.type === 'voice'){
          got.channels.create(channel.name, { type: 'voice'  })
        };if(channel.type === 'category'){
          got.channels.create(channel.name, { type: 'category'  })
        };if(channel.type === 'news'){
          got.channels.create(channel.name, { type: 'text'  })
        };if(channel.type === 'unknown');
       
})
    
  }else{
    console.log(`I can't Find This Guild In Your Account ${servercopy}`)
  }
  
  }
})
// process.on("unhandledRejection", error => {
//   return ;
//   });
// process.on("UnhandledPromiseRejectionWarning", error => {
//   return ;
//   });
client.login(`${token}`) ;
