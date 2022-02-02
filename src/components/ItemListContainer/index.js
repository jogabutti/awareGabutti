import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"
import { getFirestore } from '../../firebase'


const ItemListContainer = ({greeting}) => {
    const [items, setItems]= React.useState({})
    const [loading, setLoading]= useState(true)
    const { catId } = useParams()
    
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const productosCollections = db.collection("productos");
        productosCollections.get()
        .then(res=> {
            let datos= res.docs.map(e =>{
                return {...e.data(), prodId: e.id};
            });
            setItems(datos)
        })
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
                <ItemList productos={items}/> 
            </div>
    )
}
export default ItemListContainer

    