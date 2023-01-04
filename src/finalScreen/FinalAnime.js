import AnimeChart from "../chart/AnimeChart";
import AnimeCard from "../compoenets/AnimeCard/AnimeCard";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BaseUrl } from "../api_constant";

const FinalAnime = () => {

    const [chartData, setChartData] = useState([]);
    const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
        axios.get(BaseUrl + "/top/anime", {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((result) => {
            var data = result.data.data
            setAnimeData(data);
            console.log("get top anime ==> ", result.data.data);
            var yearArr = [];
            data.map((item, idx) => {
                if (item.year) yearArr.push(item.year)
            })

            var minYear = Math.min(...yearArr)
            var maxYear = Math.max(...yearArr);
            yearArr = [];
            for (var i = minYear; i <= maxYear; i++) {
                yearArr.push(i)
            }

            var count = 0;
            var titleArr = [];
            var dataArr = [];

            yearArr.map((yearItem) => {
                data.map(data => {
                    if (data.year && yearItem && data.rank <= 20) {
                        if (yearItem.toString().includes(data.year.toString())) {
                            count = count + 1;
                            titleArr.push(data.title);
                        }
                    }
                });
                if (count > 0)
                    dataArr.push({
                        year: yearItem,
                        count: count,
                        title: titleArr
                    })
                count = 0;
                titleArr = [];
            })
            console.log(dataArr);
            setChartData(dataArr);
        })
    }, [])

    return (
        <>
            <AnimeCard animeData={animeData} />
            <AnimeChart chartData={chartData} />
        </>
    )
}

export default FinalAnime;