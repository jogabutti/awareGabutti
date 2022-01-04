import React from "react"
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
import {Link} from 'react-router-dom'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card:{
      height:"100%",
      display:"flex",
      direction:"row",
      justifyContent:"space-around",
      alignItems:"center",
  },
})

const Item = ({producto}) => {
  const classes = useStyles();
  return (
    <Link to={`/producto/${producto.prodId}`}> 
      <Card sx={{ maxWidth: 300}}>
        <CardMedia
          component="img"
          height="140"
          image={producto.image}
          alt="planta"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <div  className={classes.card}>
            <Typography variant="body2" color="text.secondary">
              {producto.need==="Sombra" ? <Brightness6Icon/> : <LightModeIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.dificult>2 ? <ThumbDownIcon/> : <ThumbUpIcon/> }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <AttachMoneyIcon/>
              {producto.precio}
            </Typography>        
          </div>
        </CardContent>
        <CardActions >
          <Button size="small">Agregar al carrito</Button>
          <Button size="small">Leeer Más</Button>
        </CardActions>
      </Card>
    </Link>
  );
}
export default Item 