import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <div>
            <Tooltip title="Carrito">
              <IconButton color="inherit">
                <ShoppingCartIcon fontSize="medium"/>
              </IconButton>
            </Tooltip>
        </div>
    )
}

export default CartWidget
