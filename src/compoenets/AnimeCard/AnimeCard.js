import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Collapse, Grid } from '@mui/material';
import Moment from 'moment';
import "./AnimeCard.css"

const AnimeCard = ({ animeData }) => {

  return (
    <>
      <Grid container marginLeft={2} spacing={2} paddingTop={5}>
        {animeData.map(item => {
          if (item.rank <= 20) {
            return (
              <>
                <Grid item spacing={2}>
                  <CardActionArea>
                    <Card className='card-Area'>
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
                        <Typography gutterBottom>
                          <p style={{ lineHeight: 1 }}>{item.title}</p>
                        </Typography>
                        <Typography align='left' marginLeft={2}>
                          <small> <b>Release : </b>{item.aired.string}</small><br />
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