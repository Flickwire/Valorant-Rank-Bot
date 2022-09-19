import * as dotenv from 'dotenv';

dotenv.config();

export default {
    DiscordToken: process.env.DISCORD_TOKEN ?? '',
    DiscordClientID: process.env.DISCORD_CLIENT_ID ?? ''
}
