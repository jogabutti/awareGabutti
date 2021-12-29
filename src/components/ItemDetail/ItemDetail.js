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

export const ItemDetail = ({
    prodId,
    title,
    need,
    dificult,
    precio,
    image,
    category
}) =>{
    return(
        <Card sx={{ maxWidth: 300}}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
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
      </CardContent>
      <CardActions>
        <Button size="small">Agregar al carrito</Button>
        <Button size="small">Leeer Más</Button>
      </CardActions>
    </Card>
    )
}
