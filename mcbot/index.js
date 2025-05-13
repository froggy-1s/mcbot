const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

app.post('/minecraft', (req, res) => {
    const { message } = req.body;
    const channelId = '1363334091294117928';
    const channel = client.channels.cache.get(channelId);

    if (channel) {
        channel.send(`Minecraft says: ${message}`);
    }

    res.sendStatus(200);
});

client.login('MTM2MzM0MDQ4OTQ2NTUyODM4MQ.G_wvrH.nMafT4_62ES27f0caOqhMsbWnqwpiblY-J2cI0');

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
