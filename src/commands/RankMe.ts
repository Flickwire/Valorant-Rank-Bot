import { CommandInteraction, Client, ApplicationCommandType, ApplicationCommandOptionType } from "discord.js";
import { Command } from "../Command";

export const RankMe: Command = {
    name: "rankme",
    description: "Check your current Valorant rank",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "region",
            description: "Your Valorant region",
            type: ApplicationCommandOptionType.String,
            choices: [
                {
                    name: "EU",
                    value: "eu"
                },
                {
                    name: "NA",
                    value: "na"
                },
                {
                    name: "SA",
                    value: "na"
                },
                {
                    name: "AP",
                    value: "ap"
                }
            ],
            required: true
        },
        {
            name: "name",
            description: "Your in-game name (Before #)",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "tag",
            description: "Your in-game tag (After #)",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client: Client, interaction: CommandInteraction) => {
        const region = interaction.options.get("region");
        const name = interaction.options.get("name");
        const tag = interaction.options.get("tag");

        const url = `https://api.kyroskoh.xyz/valorant/v1/mmr/${region?.value}/${name?.value}/${tag?.value}`;
        const options = {
            method: "GET"
        };

        const response: Response = await fetch(url, options);

        let rankString: string = "Could not fetch your rank. Are you sure you used the right region?";

        if (response.status >= 200 && response.status < 300) {
            let fetchedRank = await response.text();
            fetchedRank = fetchedRank.split(" ")[0];
            switch (fetchedRank) {
                case "Iron":
                case "Bronze":
                case "Silver":
                case "Gold":
                case "Platinum":
                case "Diamond":
                case "Ascendant":
                case "Immortal":
                case "Radiant":
                    rankString = "Your current rank is " + fetchedRank;
                    break;
            }
        }


        const content = `Hey, ${name?.value}#${tag?.value} (${region?.value}). ${rankString}`;


        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
