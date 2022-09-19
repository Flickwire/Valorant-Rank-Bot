import { Client } from "discord.js";
import { Commands } from "../Commands";
import config from "../config";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);

        var permissionInt: number = 2415921152;

        console.log(`${client.user.username} is online`);
        console.log(`Invite with https://discord.com/api/oauth2/authorize?client_id=${config.DiscordClientID}&permissions=${permissionInt}&scope=bot%20applications.commands`)
    });
};
