const Discord = require("discord.js")
require ("dotenv").config()
const TOKEN = "OTM1MDgwNzI2NjI4NTU2ODAw.Ye5byg.CR7R3_p5poKzQq3Zyrn8LqhfIkM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(process.env.TOKEN)