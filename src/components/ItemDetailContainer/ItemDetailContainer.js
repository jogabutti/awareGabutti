import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import {ItemDetail} from "../ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom'
import {data} from '../../Productos/data'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card:{
        width: "100%",
        height:"100%"
    }
})

const ItemDetailContainer = ({greeting})=>{
    const classes = useStyles();
    const [productos, setProductos]= React.useState({})
    const [loading, setLoading]= useState(true)
    const { prodId } = useParams()
    
    useEffect(() => {
        setLoading(true);
        const productosPromise = new Promise ((res, rej)=>{
            setTimeout(function(){
                const myData = prodId ? data.find( item => item.prodId === prodId) : data
                res(myData);
            }, 200);
        });
        productosPromise.then((res)=> setProductos(res))
        .finally(()=> setLoading(false))
    }, [prodId])

    return(
        loading ? 
            <h2> CARGANDO...</h2> 
        :  
        <div className={classes.card}>
            <Typography variant="h4" gutterBottom >
                {greeting}
            </Typography>
            <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer