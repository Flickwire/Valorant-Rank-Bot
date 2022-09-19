import * as dotenv from 'dotenv';

dotenv.config();

export default {
    DiscordToken: process.env.DISCORD_TOKEN ?? ''
}
