import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Collapse, Grid } from '@mui/material';
import Moment from 'moment';
import "./AnimeCard.css"
import { useState } from 'react';

const AnimeCard = ({ animeData }) => {

  const [isReleaseClick, setIsReleaseClick] = useState(false);

  return (
    <>
      <Grid container marginLeft={3} spacing={2} paddingTop={5}>
        {animeData.map(item => {
          if (item.rank <= 20) {
            return (
              <>
                <Grid item spacing={2}>
                  <CardActionArea>
                    <Card className={isReleaseClick ? "anime-card-release" : 'anime-card'}
                      onMouseOver={() => setIsReleaseClick(false)}>
                      <Typography className='rank-tag'>
                        {item.rank}
                      </Typography>
                      <CardMedia
                        className='image-cover'
                        component="img"
                        image={item.images.jpg.image_url}
                        alt={item.title}
                      />

                      <CardContent>
                        <Typography>
                          <p className='anime-title' style={{ lineHeight: 1 }}>{item.title}</p>
                        </Typography>
                        <Typography align='left' marginLeft={2}>
                          <small
                            onClick={() => {
                              console.log("click");
                              setIsReleaseClick(true);
                            }}> <b>Release : </b>{item.aired.string}</small><br />
                          <small><b>Lastest : </b>{item.aired.to ? Moment(item.aired.to).format('DD-MM-YYYY') : "Now"}</small><br />
                          <small><b>Rating : </b>{item.rating}</small>
                        </Typography>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
              </>
            )
          }
        })}
      </Grid>
    </>
  )
}
export default AnimeCard;