const arr = [
  "waiting for someone here to get Himeko at my banner and raise her's eidolons to e4",
  "I am the bone of my bat. \n Stellaron is my body , and Trailblaze is my blood.\n I have pulled over a thousand paths. \n Unaware of lost , nor aware of gain. \n Withstood pain to create many paths awaiting Aventurine's arrival. \n I have no regrets. \n This is the only path. \n My whole life. \n Was Unlimited Jade Works.",
  "https://cdn.discordapp.com/attachments/1207560765490597888/1233811212601659473/FB_IMG_1714191168250.png?ex=662f1c7c&is=662dcafc&hm=97c57195a8775c003b5821948b3a49424f2fc290955edb55313f8eecf46532a3&",
  "https://cdn.discordapp.com/attachments/1207560765490597888/1238524133382422661/Khong_Co_Tieu_e32_20240511010941.jpg?ex=663f98fc&is=663e477c&hm=1a95e6115c4a81d308b87c488fa31d3ffa90ce10ee0669532af6a156c9787da3&"
]
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
      const random2 = arr[Math.floor(Math.random() * arr.length)];
      return message.channel.send(random2)
    }
    })
    client.on("message", message => {
      if(message.content === "g.g") {
        return message.channel.send("Why miHoYo cook my kit like fucking this. \n go fuck urself.")
      }
      })
      client.on("message", message => {
        if(message.content === "g.h") {
          return message.channel.send("Allow commands g.i, g.k or g.g \nit's my commands")
        }
        })
    

client.login(process.env.TOKEN);