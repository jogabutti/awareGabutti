import React, { useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { ItemDetail} from "../ItemDetail/ItemDetail"
import { useParams} from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import { getFirestore } from '../../firebase'

const useStyles = makeStyles({
    card:{
        width: "100%",
        height:"100%"
    }
})

const ItemDetailContainer = ({greeting})=>{
    const classes = useStyles();
    const [item, setItem]= React.useState({})
    const [loading, setLoading]= useState(true)
    const { prodId } = useParams()
    
    useEffect(() => { 
        setLoading(true);
        const db = getFirestore();
        const productosCollections = db.collection("productos");
        productosCollections.get()
        .then(res=> {
            let datos= res.docs.map(e =>{
                return {...e.data(), prodId: e.id};
            });
            const singleProd = datos.find((e) => e.prodId === prodId)
            setItem({"producto":singleProd})
        })
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
            <ItemDetail {...item}/>
        </div>
    )
}

export default ItemDetailContainer