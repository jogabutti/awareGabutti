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

const Item = ({producto}) => {
  return (
    <Card sx={{ maxWidth: 300}}>
      <CardMedia
        component="img"
        height="140"
        image={producto.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.title}
        </Typography>
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
      </CardContent>
      <CardActions>
        <Button size="small">Agregar al carrito</Button>
        <Button size="small">Leeer Más</Button>
      </CardActions>
    </Card>
  );
}
export default Item 