import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    button:{
        height:"100%",
        width:"250px",
        display:"flex",
        direction:"row",
        justifyContent:"space-around",
    },
})

/**
 * 
 * @param {
 *          stock= stock disponible, 
 *          initial= valor inicial, 
 *          addItems= funcion que agrega productos al carrito, 
 *          producto=producto 
 *        } 
 * @returns {Button}
 */
export const ItemCount = ({ stock, initial, addItems, producto}) =>{
    const classes = useStyles();
    const [cantidad, setCantidad] = useState(initial)
    let history = useNavigate();
    const add = ()=>{
        if (cantidad<=stock){
            setCantidad(cantidad+1)
        }
    }
    const put = ()=>{
        if (cantidad>0){
            setCantidad(cantidad-1)
        }
    }
    const finish=(producto, cantidad)=>{
        addItems(producto, cantidad)
        setCantidad(initial)
        history("/cart");
    }

    return(
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={12} >
                <div className={classes.button}>
                        <Button  variant="contained" disabled={cantidad===0} size="small" onClick={()=>put()}>
                            -
                        </Button>
                        <Button  variant="contained" size="small" >
                            {cantidad}
                        </Button>
                        <Button variant="contained" disabled={cantidad===stock} size="small" onClick={()=>add()}>
                            +
                        </Button>
                </div>
            </Grid>
            <Grid item xs={12}>
                {cantidad>0 && 
                    <Button size="small" onClick={()=>finish(producto, cantidad)}>
                        Terminar mi compra
                    </Button>
                }
             </Grid>
        </Grid>
    )
}