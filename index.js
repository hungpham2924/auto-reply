const arr = [
  "waiting for someone here to get Himeko at my banner and raise her's eidolons to e4",
  "I am the bone of my bat. \n Stellaron is my body , and Trailblaze is my blood.\n I have pulled over a thousand paths. \n Unaware of lost , nor aware of gain. \n Withstood pain to create many paths awaiting Aventurine's arrival. \n I have no regrets. \n This is the only path. \n My whole life. \n Was Unlimited Jade Works.",
  "https://cdn.discordapp.com/attachments/1207560765490597888/1233811212601659473/FB_IMG_1714191168250.png?ex=662f1c7c&is=662dcafc&hm=97c57195a8775c003b5821948b3a49424f2fc290955edb55313f8eecf46532a3&",
  "https://cdn.discordapp.com/attachments/1207560765490597888/1238695662472794122/Khong_Co_Tieu_e32_20240511123233.jpg?ex=664038bb&is=663ee73b&hm=0273540fe948951ed3c27172ff9fbf3874634fafb7f7adee659c2242cf456b6c&",
  "https://cdn.discordapp.com/attachments/1207560765490597888/1238669783059140618/Khong_Co_Tieu_e38_20240511012345.jpg?ex=664020a1&is=663ecf21&hm=0eba07e46973d168d4e52c22b56e3d1b61aa4d3bfeb7f0406ffc3319a50b5f9b&",
  "https://cdn.discordapp.com/attachments/1207560765490597888/1244628700943876126/Screenshot_20240524_214340_Discord.jpg?ex=6655ce4e&is=66547cce&hm=ee2e2429803603fa69f3f6ee649bf5a9265f4c83bbdc6284e4cc78b68c361fc5&",
  "gay \n https://cdn.discordapp.com/attachments/1207560765490597888/1245037224597258280/Screenshot_2024-05-28_223259.png?ex=66574ac6&is=6655f946&hm=6915cde39350799b62ecb3a1f1494574196079275f6849caa30a96c26f219f0b&"
]
const express = require("express");
const app = express();
let random3 = [];
let random2;

app.listen(3000, () => {
  console.log("Project is running");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", message => {
  if(message.content === "g.k") {
    return message.channel.send("kys \n https://cdn.discordapp.com/attachments/1207560765490597888/1233706632089702461/kys-keep-yourself-safe.png?ex=662e1256&is=662cc0d6&hm=3928cdb120d18cf9e67d4e2d7afee4de3895aa9b82aed9459f15101838c3abbd&")
  }
  })
 
  client.on("messageCreate", message => {
    if(message.content === "g.i") {
      if(random3.length === arr.length){
        random3 = [];
      }
      do{
        random2 = arr[Math.floor(Math.random() * arr.length)];
      }while(random3.indexOf(random2) !== -1)
      random3.push(random2);
      return message.channel.send(random2)
    }
    })
    client.on("messageCreate", message => {
      if(message.content === "g.g") {
        return message.channel.send("Why miHoYo cook my kit like fucking this. \n go fuck urself.")
      }
      })
      client.on("messageCreate", message => {
        if(message.content === "g.h") {
          return message.channel.send("Allow commands g.i, g.k or g.g \nit's my commands")
        }
        })
    

client.login(process.env.TOKEN);