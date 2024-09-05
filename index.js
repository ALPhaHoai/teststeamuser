import "dotenv/config";
import SteamClient, {SteamClientEvents} from "steamutils/SteamClient.js";

async function main() {
    const steamClient = new SteamClient({
        cookie: process.env.COOKIE,
        isAutoPlay: true,
    })
    steamClient.onEvent(SteamClientEvents.csgoOnline, async function (data) {
        const profile = await steamClient.getPlayersProfile(steamClient.getSteamId())
        console.log(profile);
    })
    steamClient.init()
}

main()
