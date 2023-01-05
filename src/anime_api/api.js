import axios from "axios";
import { BaseUrl } from "./api_constant";

export default {
  animeData: {
    getAnime: () =>
      axios
        .get(BaseUrl + "/top/anime", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((result) => {
          return result.data;
        }),
  },
};
