import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Collapse, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Moment from 'moment';
import "./AnimeCard.css"

const AnimeCard = ({ animeData }) => {

  const [isCardHover, setIsCardHover] = useState(false);

  useEffect(() => {
    animeData.map(item => {
      console.log("animeData item", item)

    })
  }, [animeData])

  console.log(isCardHover,"caredd");

  return (
    <div>
      <h1> anime card</h1>
      {animeData.map(item => {
        if (item.rank <= 20) {
          return (
            <Container>
              {/* <Box className='floating-element'> */}
              <Grid container>
                <Grid item >
                  <CardActionArea >
                    <Card className='card-Area'
                      onMouseOver={() => {
                        console.log("hover");
                        setIsCardHover(true);
                      }}
                      onMouseLeave={() => {
                        console.log("hover out");
                        setIsCardHover(false);
                      }}>
                      <Typography className='rank-tag'
                      // sx={{
                      //   position: "absolute",
                      //   top: "9px",
                      //   right: "9px",
                      //   backgroundColor: "#FF35E3",
                      //   borderRadius:"16",
                      //   color: "black",
                      //   paddingLeft: "10px",
                      //   paddingRight: "10px"
                      // }}
                      >
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
                        <Collapse in={isCardHover} timeout="auto" unmountOnExit>
                          <Typography align='left' marginLeft={2}>
                            <b>Release : </b>{item.aired.string}<br />
                            <b>Lastest : </b>{item.aired.to ? Moment(item.aired.to).format('DD-MM-YYYY') : "Now"}<br />
                            <b>Rating : </b>{item.rating}
                          </Typography>
                        </Collapse>
                      </CardContent>
                      {/* <Collapse in={isCardHover} timeout="auto" unmountOnExit >
                        <Typography >12</Typography>
                      </Collapse> */}
                    </Card>
                  </CardActionArea>
                </Grid>
              </Grid>
              {/* </Box> */}

            </Container >
          )
        }
      })}
      {/* <Container maxWidth="lg">
        <Box sx={{ maxWidth: "lg", display: 'flex', flexWrap: 'wrap' }}>
          <Card sx={{ maxWidth: 200, height: 300, margin: 1, borderRadius: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                width="100%"
                image="https://img.youtube.com/vi/27OZc-ku6is/maxresdefault.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Container> */}


    </div >
  )
}
export default AnimeCard;