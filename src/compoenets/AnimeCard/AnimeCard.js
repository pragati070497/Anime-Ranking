import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Moment from "moment";
import "./AnimeCard.css";
import { useState } from "react";

const AnimeCard = ({ animeData }) => {
  const [isReleaseClick, setIsReleaseClick] = useState(false);

  return (
    <>
      <Grid
        container
        spacing={2}
        padding={5}
        sx={{
          width: "auto",
          marginLeft: "4rem",
        }}
      >
        {animeData.map((item) => {
          return (
            <>
              <Grid item spacing={2}>
                <CardActionArea>
                  <div className={isReleaseClick ? "" : "card-div"}>
                    <Card
                      className={
                        isReleaseClick ? "anime-card-release" : "anime-card"
                      }
                      onMouseOver={() => setIsReleaseClick(false)}
                    >
                      <Typography className="rank-tag">{item.rank}</Typography>
                      <CardMedia
                        className="image-cover"
                        component="img"
                        image={item.images.jpg.image_url}
                        alt={item.title}
                      />

                      <CardContent>
                        <Typography>
                          <p className="anime-title" style={{ lineHeight: 1 }}>
                            {item.title}
                          </p>
                        </Typography>
                        <Typography align="left" marginLeft={2}>
                          <small
                            onClick={() => {
                              console.log("click");
                              setIsReleaseClick(true);
                            }}
                          >
                            {" "}
                            <b>Release : </b>
                            {item.aired.string}
                          </small>
                          <br />
                          <small>
                            <b>Lastest : </b>
                            {item.aired.to
                              ? Moment(item.aired.to).format("DD-MM-YYYY")
                              : "Now"}
                          </small>
                          <br />
                          <small>
                            <b>Rating : </b>
                            {item.rating}
                          </small>
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </CardActionArea>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
};
export default AnimeCard;
