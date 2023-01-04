import axios from "axios";
import { BaseUrl } from "../api_constant";



export default {
    getAnime: () => {
        axios.get(BaseUrl + "/top/anime", {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((result) => {
            console.log("API ==>  get top anime ==> ", result);
            return result.data;
        })
    }
}