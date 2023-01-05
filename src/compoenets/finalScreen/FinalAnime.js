import { useEffect, useState } from 'react';
import AnimeCard from '../AnimeCard/AnimeCard';
import AnimeChart from '../chart/AnimeChart';
import api from '../../anime_api/api';
import "./FinalAnime.css";

const FinalAnime = () => {

    const [chartData, setChartData] = useState([]);
    const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
        api.animeData.getAnime().then(result => {
            var data = result.data
            var yearArr = [];
            var cardList = [];

            data.map(item => {
                if (item.year) yearArr.push(item.year)
                if (item.rank <= 20) cardList.push(item)
            });
            setAnimeData(cardList);

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
            setChartData(dataArr);
        })
    }, [])

    return (
        <div className="anime-layout">
            <AnimeCard animeData={animeData} />
            <AnimeChart chartData={chartData} />
        </div>
    )
}

export default FinalAnime;