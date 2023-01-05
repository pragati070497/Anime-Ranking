import axios from "axios";
import { BaseUrl } from "../api_constant";



export default {
    animeData: {
        getAnime: () =>
            axios.get(BaseUrl + "/top/anime", {
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((result) => {
                console.log("API ==>  get top anime  ==> ", result.data);
                return result.data;
            }),
    }
}
