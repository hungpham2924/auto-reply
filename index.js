const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("message", message => {
  if(message.content === "g.k") {
    return message.channel.send("kys \n https://cdn.discordapp.com/attachments/1207560765490597888/1233706632089702461/kys-keep-yourself-safe.png?ex=662e1256&is=662cc0d6&hm=3928cdb120d18cf9e67d4e2d7afee4de3895aa9b82aed9459f15101838c3abbd&")
  }
  })
  client.on("message", message => {
    if(message.content === "g.i") {
      return message.channel.send("waiting for someone here to get Himeko at my banner and raise her's eidolons to e4")
    }
    })


client.login(process.env.TOKEN);