import React, { useContext} from 'react'
import { CartContext } from '../../context/CartContext';
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
import {ItemCount} from '../ItemCount/ItemCount'

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
      width:"100%",
      display:"flex-wrap",
      direction:"column",
      justifyContent:"center",
      alignItems:"center",
    },
    picture:{
      height: "40%"
    }
})

export const ItemDetail = ({ producto}) =>{
  const classes = useStyles();
  const {removeItems, addItems, clear, isInCart}= useContext(CartContext)

  return(
    <Card sx={{ maxWidth: "90%"}} className={classes.card}>
      <CardMedia
        component="img"
        height="450em"
        image={producto.image}
        alt="plantas"
      />
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          {producto.title}
        </Typography>
        <div className={classes.cardContent}>
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
        <CardActions >
          <div className={classes.cardContent}>
            <ItemCount initial={0} stock={producto.stock} addItems={addItems} producto={producto}/>
            <Button size="small" onClick={()=>removeItems(producto.prodId)}>Quitar del carrito</Button>
            <Button size="small" onClick={()=>clear(producto.prodId)}>Vaciar el carrito</Button>
            <Button> {isInCart(producto.prodId) ? "Ya elegido" : "No elegido aún"} </Button>
          </div>
        </CardActions>
      </CardContent>
    </Card>
    )
}
