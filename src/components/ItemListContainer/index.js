import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import ItemList from "../ItemList/ItemList"
import {data} from "../../Productos/data"
import {useParams} from "react-router-dom"

//lista de productos disponibles

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos]= useState([])
    const [loading, setLoading]= useState(true)
    const { catId } = useParams()
    
    useEffect(() => {
        setLoading(true);
        const productosPromise = new Promise ((res, rej)=>{
            setTimeout(function(){
                const myData = catId ? data.filter( item => item.category === catId) : data
                res(myData);
            }, 200);
        });
        productosPromise.then((res)=> setProductos(res))
        .finally(()=> setLoading(false))
    }, [catId])

    return (
        loading ? 
            <Typography variant="h4" gutterBottom > CARGANDO...</Typography>
        :
            <div>
                <Typography variant="h4" gutterBottom >
                    {greeting}
                </Typography>
                <ItemList productos={productos}/> 
            </div>
    )
}
export default ItemListContainer

    