import React, {useState, useEffect} from 'react';
import {ItemDetail} from "../ItemDetail/ItemDetail"
import { makeStyles } from '@mui/styles';
import {useParams} from 'react-router-dom'
import {data} from '../../Productos/data'

/* const useStyles = makeStyles({
    card:{
        display:"flex",
        direction:"row",
        justifyContent:"center",
        alignItems:"center",
        margin:"15px"
    }
}) */

const ItemDetailContainer = ()=>{
    /* const classes = useStyles(); */
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
        <ItemDetail {...productos}/>
    )
}

export default ItemDetailContainer