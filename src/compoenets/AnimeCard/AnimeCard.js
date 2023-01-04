import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
const AnimeCard= ()=>{

    return(
        <div>
       <h1> anime card</h1>
       <Container  maxWidth="lg">
        <Box sx={{maxWidth:"lg", display:'flex',flexWrap:'wrap'}}>
       <Card sx={{ maxWidth: 200, height:300,margin:1,borderRadius:2}}>
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
        </Container>


        </div>
    )
}
export default AnimeCard;