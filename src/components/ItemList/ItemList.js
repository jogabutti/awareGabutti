import React from 'react';
import Item from "../Item/Item"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card:{
        display:"flex",
        direction:"row",
        justifyContent:"space-around",
        alignItems:"center",
    }
})

const ItemList = ({productos})=>{
    const classes = useStyles();
    return(
        <div className={classes.card}>
            {productos.map(producto=>{
                return <div>
                            <Item producto={producto}/>
                        </div>
            })}
        </div>
    )
}

export default ItemList