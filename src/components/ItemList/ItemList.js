import React from 'react';
import Item from "../Item/Item"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card:{
        display:"flex",
        direction:"row",
        justifyContent:"center",
        alignItems:"center",
        margin:"15px"
    }
})

const ItemList = ({productos})=>{
    const classes = useStyles();
    return(
        <div>
            {productos.map(producto=>{
                return <div className={classes.card}>
                            <Item producto={producto}/>
                        </div>
            })}
        </div>
    )
}

export default ItemList