const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setPresence({
        activities: [{ name: "Free Fire Max 🔥", type: 0 }], // 0 = Playing
        status: "online" // Online, idle, dnd, invisible
    });
});

client.login("MTMzOTc1NDI0OTg5NDEwNTE5MA.G1zudE.8oX5z8oMeiM8I-K5UeejSILAqnO7DiW17DUk9E");
