import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card:{
        height:"100%",
        display:"flex",
        direction:"row",
        justifyContent:"space-around",
        alignItems:"center",
        margin:"2%"
    },
    cardContent:{
      display:"flex",
      direction:"column",
      justifyContent:"center",
      alignItems:"center",
    },
    picture:{
      height: "40%"
    }
})

export const ItemDetail = ({
    title,
    need,
    dificult,
    precio,
    image
}) =>{
  const classes = useStyles();
    return(
      <Card sx={{ maxWidth: "90%"}} className={classes.card}>
        <CardMedia
          component="img"
          height="450em"
          image={image}
          alt="plantas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <div className={classes.cardContent}>
            <Typography variant="body2" color="text.secondary">
              {need==="Sombra" ? <Brightness6Icon/> : <LightModeIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {dificult>2 ? <ThumbDownIcon/> : <ThumbUpIcon/> }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <AttachMoneyIcon/>
              {precio}
            </Typography> 
          </div>       
        </CardContent>
        <CardActions >
          <Button size="small">Agregar al carrito</Button>
          <Button size="small">Leeer Más</Button>
        </CardActions>
      </Card>
    )
}
