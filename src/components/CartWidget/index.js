import React, { useContext } from 'react'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  let history = useNavigate();
  const {carrito} = useContext(CartContext)
  let count = 0
  carrito.map(item => {
      return(count += item.cantidad) 
  }) 
  const redirect=()=>{
    history("/cart");
  }
  return (
      <div>
          <Tooltip title="Carrito">
            <IconButton color="inherit">
              <Badge badgeContent={count} color="primary">
                <ShoppingCartIcon fontSize="medium" onClick={()=>redirect()}/>
              </Badge>
            </IconButton>
          </Tooltip>
      </div>
  )
}

export default CartWidget
