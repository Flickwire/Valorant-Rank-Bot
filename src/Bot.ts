import { Client } from "discord.js";

import config from "./config";

console.log("Bot is starting...");
console.log(config);

const client = new Client({
    intents: []
});

//console.log(client); 
