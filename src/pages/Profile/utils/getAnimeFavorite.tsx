import config from "../../../../config"
import axios from "axios";

async function getAnimeFavorite() {

    const cors_anywhereUrl = `http://localhost:8080`;
    const url = `api.myanimelist.net/v2/users/${config.animelist.username}/animelist`;
    const params = new URLSearchParams([
        ["fields", "list_status"],
        ["sort", "list_score"],
        ["limit", config.animelist.count.toString()]
    ]);

    const data = await axios.get(`${cors_anywhereUrl}/${url}?${params}`, {
        headers: {
            "Content-Type": "appication/json",
            "X-MAL-CLIENT-ID": (import.meta.env.VITE_MAL_CLIENT_ID)
        }
    });

    return data.data as animeList;
}

export default getAnimeFavorite